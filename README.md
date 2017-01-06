# money2chn

A javascript ES6 class that transform money to Chinese uppercase. Used in vue.js component.


## Usage

In the `<script></script>` part of single vue component, use:

	import Currency from './money2chn.js'
	var money = '1024.01'
	var currency = new Currency()
	currency.toUpper(money)

The result is: 壹仟零贰拾肆圆零壹分

