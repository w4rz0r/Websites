views.home = () => {
    return /*HTML*/`
    <section class="header">
    ${getNavigation()}

    

    <div class="text-box">
        <h1>Create your Own Reality</h1>
        <p>
            Make your Own Character, Gain Xp by Performing Tasks in Real Life!
            Lvl Up by Completing said Tasks and Increase your Stats!
        </p>
        <a onclick="render('Classes')" class="hero-btn">Choose a Starting Class Here!</a>
    </div>

</section>

    

    <!---- Our References?!? ---->

    <section class="references">
        <h1>Our References?!?</h1>
        <p>The References of Our Service will be Displayed Below.</p>

        <div class="row">
            <div class="references-col">
                <img src="./images/profileOne.gif">
                    <div>
                        <p>
                            The consept offers alot in my opinion.
                            You get the ability to create your own motivation throug it,
                            And it resonated alot with me, And hs helped me alot.
                            I would recommend this simply because it's fun and
                            you have nothing to lose by trying.
                            <i class="fa fa-hand-peace-o"></i>
                            <i class="fa fa-thumbs-o-up"></i>
                        </p>
                            <h3>Pacto_</h3>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                    </div>
            </div>
            <div class="references-col">
                <img src="./images/profileTwo.gif">
                    <div>
                        <p>
                            Not bad, i really liked the idea!<br> (◡ w ◡)
                            A distinct lack of hot female characters in my opinion,
                            But house chores doesn't feel like simply chores now!
                            This game gives it more of a meaning andmakes
                             it more rewarding and i love that! ʕ •ᴥ•ʔ
                            </p>
                            <h3>Nyx</h3>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
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

render();