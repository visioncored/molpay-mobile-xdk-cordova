var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

        // MOLPay payment details
        var paymentDetails = {
            // ------- SDK required data ----------
            'mp_amount' : '',
            'mp_username' : '',
            'mp_password' : '',
            'mp_merchant_ID' : '',
            'mp_app_name' : '',   
            'mp_order_ID' : '', 
            'mp_currency' : 'MYR',
            'mp_country' : 'MY',  
            'mp_verification_key' : '',  
            'mp_channel' : '', 
            'mp_bill_description' : 'Bill description',
            'mp_bill_name' : 'Bill name',
            'mp_bill_email' : 'email@email.com',
            'mp_bill_mobile' : '123456',
            'mp_channel_editing' : false,
            'mp_editing_enabled' : false,
            'mp_transaction_id' : '',
            'mp_request_type' : '' // Use this as the result id, do not use 'Receipt'.
        };

        var molpayCallback = function (transactionResult) {
            console.log('molpayCallback transactionResult = '+transactionResult);
            alert('molpayCallback transactionResult = '+transactionResult);
        };

        window.molpay.startMolpay(paymentDetails, molpayCallback);
        // window.molpay.transactionRequest(paymentDetails, molpayCallback);
        // window.molpay.closeMolpay();

    }

};

app.initialize();