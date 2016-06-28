const Map = require('immutable').Map;

// for use during setup

exports.generateSkeleton = (userinfo = {}, conversation = [],
  order = [], sale = [], notification = []) => {
  return Map({ userinfo, conversation, order, sale, notification }).toJSON();
};

/*  

    
    userinfo:
    
    {  username: '',
  icq: '',
  aol: '',
  jabber: '',
  website: '',
  currencycode: '',
  balance: '',
  depositaddress: ''
}
    
    username: The account username.
    icq: The account ICQ number.
    aol: The account AOL identifier.
    jabber: The account Jabber.
    website: The account Website.
    currencycode: The current 3-letter currency code used by the account.
    balance: The account balance, in BTC.
    depositaddress: The account current BTC deposit address.
    
    { response: 
   { username: [ 'sousaphonepure' ],
     icq: [ '' ],
     aol: [ '' ],
     jabber: [ '' ],
     website: [ '' ],
     currencycode: [ 'USD' ],
     balance: [ '0.00803956' ],
     depositaddress: [ '1AtBPfG6RhARpCHSPfUiLZ2EH4E2xyaB6Z' ] } }
    
    
    conversations: 
    
    title: The conversation title.
    sticky: Value of 1 if you stickied the conversation, otherwise 0.
    folder: The current folder of the conversation.
    messagecount: The number of messages in this conversation.
    lastcontent: The last message in this conversation (preview only).
    lastaction: The UNIX timestamp of the last message in the conversation.
    
    { response: 
   { conversation: 
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] } }
    
    messages:  (not stored, although )
    
    username: The user who sent the message.
    content: The full content of the message.
    time: The UNIX timestamp of the message.
    messagecount: The total number of messages sent by this user.
    
    This only returns messages for a specific conversation. Similar structure to userinfo, likely
    
    sendmessage: 
    
    returns nothing
    
    orders: 
    
    id: The order ID.
    seller: The username of the seller.
    title: The listing title of this order.
    buyernotes: The notes entered by the buyer.
    sellernotes: The notes entered by the seller.
    qty: The quantity of items in the order.
    unitprice: The unit price (in USD) of each item in the order.
    unitpostageprice: The unit price (in USD) of the postage per item.
    postagedays: The number of days indicated in the postage option.
    postagename: The title of the postage option.
    status: The current status of the order.
    creationtime: The UNIX timestamp when the order was placed.
    shiptime: The UNIX timestamp when the order was shipped, 0 if not yet.
    finalizetime: The UNIX timestamp when the order was finalized, 0 if not yet.
    feedbacktype: The type of feedback left on this order.
    feedbacktext: The text of the feedback left on this order.
    feedbackreply: The reply left on the feedback for this order.
    
    { response: { order: [ [Object], [Object], [Object], [Object], [Object], [Object] ] } }
    
    sales: 
    
    id: The sale ID.
    buyer: The username of the buyer.
    title: The listing title of this sale.
    buyernotes: The notes entered by the buyer.
    sellernotes: The notes entered by the seller.
    qty: The quantity of items in the sale.
    unitprice: The unit price (in USD) of each item in the sale.
    unitpostageprice: The unit price (in USD) of the postage per item.
    postagedays: The number of days indicated in the postage option.
    postagename: The title of the postage option.
    status: The current status of the sale.
    creationtime: The UNIX timestamp when the sale was placed.
    shiptime: The UNIX timestamp when the sale was shipped, 0 if not yet.
    finalizetime: The UNIX timestamp when the sale was finalized, 0 if not yet.
    feedbacktype: The type of feedback left on this sale.
    feedbacktext: The text of the feedback left on this sale.
    feedbackreply: The reply left on the feedback for this sale.
    
    { response: { sale: [ [Object], [Object], [Object], [Object], [Object], [Object] ] } }

    
    withdraw: 
    
    returns nothing
    
    notifications: 
    
    id: The unique ID of the notification.
    content: The content of the notification.
    link: The link that the notification points to.
    creationtime: The UNIX timestamp when the notification was sent.
    read: Value of 1 if you read the notification, otherwise 0.
    
    { response: { notification: [ [Object], [Object] ] } }


{ response: { error: [ 'Conversation was not found.' ] } }
{ response: { error: [ 'You must enter the message to be sent.' ] } }
{ response: { error: [ 'The destination BTC address is invalid.' ] } }

*/