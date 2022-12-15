views.HIW = () => {
    return /*HTML*/`
    <section>
        ${getNavigation()}


    <!----- HOW IT WORKS ----->
    <section class="HIW">
            <h1>Usual Questions:</h1>
            <p>A Short Explanation as to How Everything Works.</p>
            <div class="row">
            <div class="HIW-col">
                <h3>The Lvling Process</h3>
                <p>
                    By Writing Tasks in "Mission's" and Completing
                    Said Missions you Will be Rewarded XP, XP is 
                    Used to Lvl up You'r Character Making it Stronger.
                </p>
            </div>
            <div class="HIW-col">
                <h3>Choose Your IRL Missions</h3>
                <p>
                    Everything can be a Mission! If Something Needs to be Done 
                    Make it Into a Mission, it Will Feel more Rewarding that Way!
                    Any Boring IRL Chore, Anything you Want to do, or Complete.
                    You Will be Rewarded with XP for your Effort's and Make you'r 
                    Character more Powerful, What are you Waiting For!
                </p>
            </div>
            <div class="HIW-col">
                <h3>Pick Your Class</h3>
                <p>
                    In the "Classes" tab You'll be Able to Pick Whatever 
                    Character you Desire, And take it With you as a Companion 
                    IRL, An Extention of Yourself if You Will. To Help you Feel Motivated 
                    in The Daily.
                </p>
            </div>
        </div>

    </section>

    <!---- Progression ---->

<section class="Progression">
<h1>Progression</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div class="row">
    <div class="Progression-col">
        <img src="images/backgroundPurple.png">
        <h3>How do i Progress?</h3>
        <p>
            Neque porro quisquam est qui 
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who loves pain itself, who seeks after it and wants 
            to have it, simply because it is pain...
        </p>
    </div>
    <div class="Progression-col">
        <img onclick="render('profile')" src="images/backgroundPurple2.png">
        <h3>How do i Choose Missions?</h3>
        <p>
            Neque porro quisquam est qui 
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who loves pain itself, who seeks after it and wants 
            to have it, simply because it is pain...
        </p>
    </div>
    <div class="Progression-col">
        <img onclick="render('Classes')" src="images/backgroundPurple.png">
        <h3>How do i Pick a Class?</h3>
        <p>
            Neque porro quisquam est qui 
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who loves pain itself, who seeks after it and wants 
            to have it, simply because it is pain...
        </p>
    </div>
</div>
</section>
    ${getFooter()}
    `;
};