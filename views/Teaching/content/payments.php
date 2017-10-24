<!--<div id="content">

	<?php /*echo Q::tool('Places/address', array()) */?></div>

</div>-->


    <h1>Payments!</h1>

    <ul class="plans">
        <li>
            <div class="plan-wrapper">
                <div class="head plan20">Starter</div>
                <div class="price">20$</div>
                <div><?php echo Q::tool('Assets/payment', array('payments' => 'stripe', 'currency' => 'USD', 'description' => 'Pay for Starter', 'payButton' => 'Pay', 'amount' => 20), 'pay20')?></div>
            </div>
        </li>
        <li>
            <div class="plan-wrapper">
                <div class="head plan50">Standard</div>
                <div class="price">50$</div>
                <div><?php echo Q::tool('Assets/payment', array('payments' => 'stripe', 'currency' => 'USD', 'description' => 'Pay for Standard', 'payButton' => 'Pay', 'amount' => 50), 'pay50')?></div>
            </div>
        </li>
        <li>
            <div class="plan-wrapper">
                <div class="head plan100">Premium</div>
                <div class="price">100$</div>
                <div><?php echo Q::tool('Assets/payment', array('payments' => 'stripe', 'currency' => 'USD', 'description' => 'Pay for Premium', 'payButton' => 'Pay', 'amount' => 100), 'pay100')?></div>
            </div>
        </li>
    </ul>

</div>
