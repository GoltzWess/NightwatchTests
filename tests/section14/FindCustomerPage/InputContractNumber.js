module.exports =
    {
        'part one: FindCustomer that exists' : function(client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body',1000)
                .setValue('#consultantInput','1670028650008')
                .setValue('#identificationInput', '57001947800')
                .pause(1000)
                .assert.value('#consultantInput','1670028650008')
                .assert.value('#identificationInput','57001947800')
                .waitForElementVisible('#continue',1000)
                .click('button[type=button]',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
        },

        'Part two: Did it navigate to the next page' : function(client)
        {
            client
                .waitForElementVisible('#continue',1000)
                .click('#continue');
        },
        'Part Three: Check if elements are present': function (client)
        {
            client
                //client overview card
                .waitForElementPresent('#clientname',10000)
                .assert.visible('#clientname')
                .assert.visible('#gender')
                .assert.visible('#retirementage')
                .assert.visible('#remainingterm')
                .assert.visible('#currentamount')

                //product overview card
                .assert.visible('#initialInvestmentAmount')
                .assert.visible('#recurringInvestmentAmount')
                .assert.visible('#annualContributionIncrease')
                .assert.visible('#currentInvestmentAmount')
                .assert.visible('#commencementDate')
                .assert.visible('#retirementAge')
                .assert.visible('#selectedRetirementDate')
                .assert.visible('#bonusAmount')
                .end();
        }
};
