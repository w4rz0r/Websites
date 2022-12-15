views.Classes = () => {
    return /*HTML*/`
    <section>
    ${getNavigation()}


<!----- HOW IT WORKS ----->

<section class="Classes">
    <h1>Choose Your Class</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div class="row">
        <div class="Classes-col">
            <img src="images/Warrior.png">
            <div class="layer2">
                <h3>Warrior</h3>
            </div>
        </div>
        <div class="Classes-col">
            <img src="images/Archer.png">
            <div class="layer2">
                <h3>Archer</h3>
            </div>
        </div>
        <div class="Classes-col">
            <img src="images/bard.png">
            <div class="layer2">
                <h3>Bard</h3>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="Classes-col">
            <img src="images/gunbreaker.png">
            <div class="layer2">
                <h3>Gun Breaker</h3>
            </div>
        </div>
        <div class="Classes-col">
            <img src="images/Mage.png">
            <div class="layer2">
                <h3>Mage</h3>
            </div>
        </div>
        <div class="Classes-col">
            <img src="images/Paladin.png">
            <div class="layer2">
                <h3>Paladin</h3>
            </div>
        </div>   
    </div>
    <div class="row">
    <div class="Classes-col">
        <img src="images/monk.png">
        <div class="layer2">
            <h3>Monk</h3>
        </div>
    </div>
    <div class="Classes-col">
        <img src="images/assassin.png">
        <div class="layer2">
            <h3>Assassin</h3>
        </div>
    </div>
    <div class="Classes-col">
        <img src="images/Shaman.png">
        <div class="layer2">
            <h3>Shaman</h3>
        </div>
    </div>   
</div>
    
</section>
${getFooter()}

`;
};