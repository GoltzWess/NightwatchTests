//btnNavigateToFindCustomerPage
//btnRunCalculations
module.exports =
    {
        'Part One: Navigate to Illustrator Page' : function(client)
        {
            client
                .url('https://advcalc-pp.liberty.fin-za.net/#/illustrator')
                //.url('https://ddhubadvcalc1/#/illustrator')
                .pause(2000);
        },
        'Part Two: Run multiple Scenarios one the Agile Calc': function (client)
        {
            client
                .waitForElementVisible('.un-blur',30000)
                .clearValue('#Age')
                .setValue('#Age', '37')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','88')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000);


            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '25')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','77')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '17')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','89')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '47')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','68')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '36')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','71')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '39')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','82')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '50')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','79')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '42')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','63')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '29')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','58')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '38')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','59')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(10000)
                .clearValue('#Age')
                .setValue('#Age', '35')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','84')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '35')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','56')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '43')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','65')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '37')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','73')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '37')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','77')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000);

            client
                .pause(1000)
                .clearValue('#Age')
                .setValue('#Age', '46')
                .clearValue('#ExpectedRetirementAge')
                .setValue('#ExpectedRetirementAge','75')
                .click('#btnRunCalculations',function(result)
                {
                    this.assert.strictEqual(result.status,0);
                })
                .pause(1000)
                .waitForElementVisible('.un-blur',30000)
                //.end();
        }
    };