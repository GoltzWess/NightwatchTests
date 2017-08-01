module.exports =
{
      tags: ['WelcomePage'],
      'Demo test WelcomePage' : function(client) {
         client
            .url('localhost:8080')
            .waitForElementVisible('body',1000);

         client.expect.element('body').to.be.present;
         client.expect.element('#disclaimerText').to.be.present;

         client
            .pause(1000)
            .end();
      }
}
