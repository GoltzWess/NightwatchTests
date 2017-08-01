module.exports =
{
   'part one: Navigate to FindCustomer page' : function(client)
   {
      client
        .url('localhost:8080')
        .waitForElementVisible('#btnNavigateToFindCustomerPage',1000)
        .pause(1000)
        .click('#btnNavigateToFindCustomerPage')

   },

   'Part Two: Land on FindCustomer page' : function(client)
   {
      client
        .verify.visible('#identificationInput')
        .verify.visible('#consultantInput')
        .end();
   }
};
