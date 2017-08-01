module.exports =
     {
        'Part one: FindCustomer that exists' : function(client)
        {

            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/searchclient')
                .waitForElementVisible('body',1000)
                .setValue('#identificationInput', '0010028622')
                .pause(1000)
                .assert.value('#identificationInput','0010028622')
                .waitForElementVisible('#continue',1000)
                .click('button[type=button]',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
        },

        'Part two: Did it navigate to summary' : function(client)
        {
            client
                .waitForElementPresent('#clientname',10000);

        },
        'Part Three: Navigate to ComparisonPage' : function(client)
        {
            client
                .click('#proceed');
        },

        'Part Four: Did it navigate to ComparisonPage' : function(client)
        {
            client
                .waitForElementVisible('#graphTabs',7000)
                .assert.visible('#productDetailCard')
                .pause(1000);
        },
        'Part Five: Navigate To IllustratorPage': function (client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/illustrator')
                .waitForElementVisible('#retirementJourney',7000)
                .moveToElement('#retirementJourney',10,10)
                .waitForElementVisible('#welcomeMsg',7000);

            //figure out what to do here because its possible for these values to = 0.00
            client.expect.element('#MonthlyContribution').value.to.not.equal("R 0.00 p.m");
            client.expect.element('#LumpSumInvestment').value.to.not.equal("R 0.00");
            client.expect.element('#Age').value.to.not.equal("0 years");
            client.expect.element('#IncomeRate').value.to.not.equal("0.00");
            client.expect.element('#ExpectedRetirementAge').value.to.not.equal("0 years");

            client
                .waitForElementVisible('.loading.col-md-12',7000)
                .moveToElement('#retirementBreakdown',10,10)
                .moveToElement('.loading.col-md-12',-1000,-1000)
                .pause(1000)
                .waitForElementVisible('#retirementSavings',60000)
                .waitForElementVisible('#ValueTop',7000);

            client.expect.element('#ValueLeft').text.to.not.equal("R 0*");
            client.expect.element('#ValueTop').text.to.not.equal("R 0*");
            client.expect.element('#ValueLow').text.to.not.equal("R 0");
            client.expect.element('#ValueHigh').text.to.not.equal("R 0*");

            client
                .moveToElement('#postRetirement',10,10)
                .pause(2000);

            client.expect.element('#RetirementAge').value.to.not.equal("0");
            client.expect.element('#MonthlySalary').value.to.not.equal("R 0.00");
            client.expect.element('#MonthlyExpenditureRate').value.to.not.equal("R 0.00");
            client.expect.element('#ProjectedSalary').text.to.not.equal("R 0.00 p.m");
            client.expect.element('#AnnualDrawdown').value.to.not.equal("0.00%");
            client.expect.element('#AnnualInvestmentReturn').value.to.not.equal("0.00%");
            client.expect.element('#AnnualEscalationRate').value.to.not.equal("0.00%");
            client.expect.element('#DeferralPeriod').value.to.not.equal("0 years");
            client.end();
        }

    };