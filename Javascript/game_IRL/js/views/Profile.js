views.profile = () => {
    return /*HTML*/`
    <section>
    ${getNavigation()}


<!---- Profile ---->

<section class="Profile">
    <h1>Profile</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <section class="Profile-info">
        <h1>Profile Info Template</h1>
    </section>

        <!----- MESSAGE CONTAINER ----->

        <div class="outer-container">
            <div class="mission-container">
                <!----- USER INPUT BOX ----->
                <div class="mission-bar-input-block">
                    <div id="userInput">
                        <input id="textInput" class="input-box" type="text" name="missions"
                        placeholder="Write a New Mission Here!" oninput="model.inputs.message = this.value;" onkeydown="sendKey(event);" autofocus>
                        <!----- Minutes Input ----->
                            <div class="box">
                                <label for="Minutes">Minutes</label>
                                <div class="dec button">-</div>
                                <input type="text" name="amount" id="1" value="0" class="input-Minutes">
                                <div class="inc button">+</div>
                            </div>
                        <button onclick="addMessage()">Enter</button>
                    </div>
                </div>
                ${getMessages()}
            </div>
        </div>
        
    <div class="row">
        <div class="Profile-col">
            <img src="images/Class.png">
            <div class="layer">
                <h3>Classes</h3>
            </div>
        </div>
        <div class="Profile-col">
            <img src="images/progressBar.png">
            <div class="layer">
                <h3>Stats</h3>
            </div>
        </div>
        <div class="Profile-col">
            <img src="images/missions.png">
            <div class="layer">
                <h3>Missions</h3>
            </div>
        </div>
    </div>
</section>

<!----- Big Text Wallpaper ----->

<section class="Big-Text-Wallpaper">
<h1>Participate in Your Own IRL Adventure</h1>
<a onclick="render('HIW')" class="hero-btn">Progression</a>
</section>

${getFooter()}

`;
};

function addMessage() {

    // If message input is empty, don't do anything
    if (!model.inputs.message) return;

    // Push message to model.messages array
    model.messages.unshift(model.inputs.message);

    // Reset message input in model
    model.inputs.message = '';

    // Exceeds 20? Delete oldest
    if (model.messages.length > 20) model.messages.pop();

    // Save in localStorage
    saveMessages();

    // Update the view
    render();

    // Refocus input (only if profile is rendered again)
    if (model.state.page === 'profile') document.getElementById('textInput').focus();

}

function sendKey(e) {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        addMessage();
    }
}

function getMessages() {

    // Turns the array of messages into html
    // map: loops through array and changes every value and returns a new array
    // join: takes all items in the array and glues them together
    const messages = model.messages.map(message => /*HTML*/`
        <li class="mission-bubble" style="list-style-type: none;">${message}</li>
    `).join('');

    // Puts the li elements into an ul and returns it
    return `<ul class="mission-bubbles">${messages}</ul>`;

}

function saveMessages() {
    localStorage.setItem('messages', JSON.stringify(model.messages));
}

function fetchMessages() {
    const messages = JSON.parse(localStorage.getItem('messages'));
    if (!messages) return;
    model.messages = messages;
}

fetchMessages();

