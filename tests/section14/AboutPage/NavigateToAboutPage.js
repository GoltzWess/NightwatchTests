module.exports =
    {
        'About page' : function(client)
        {
            client
                .url('http://localhost:8080/#/about')
                .waitForElementVisible('body', 1000)
                .pause(1000)
                .waitForElementVisible('#headerWrapper', 1000)
                .end();
        }

    };