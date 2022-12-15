function getNavigation() {
    return /*HTML*/`
    <nav>
        <a href="index.html"><div class="logo"></div></a>
        <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
                <li><a onclick="render('home');">HOME</a></li>
                <li><a onclick="render('HIW');">HOW IT WORKS</a></li>
                <li><a onclick="render('profile');">PROFILE</a></li>
                <li><a onclick="render('Classes');">CLASSES</a></li>
                <li><a onclick="render('Missions');">MISSIONS</a></li>
            </ul>
            
        </div>
        <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>
    `;
}

function getFooter() {
    return /*HTML*/`

    <!----- Inspiration ----->


    <section class="Inspiration">
    <h4>Inspiration</h4>
    <p>
        The Consept was Originally due to our Passion for Gaming.
        While also Maintaining the Front of Being Responsible Beings
        of Society. <br>Thus this Idea Came to Life to Solve this Issue.
        now you can Both be a Responsible Adult While Playing Games.
    </p>
    <div class="icons">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-linkedin"></i>
        <i class="fa fa-github"></i>
    </div>
    <h5>Made By a <i class="fa fa-wheelchair-alt"> Person</i></h5>
    </section>
    `}

