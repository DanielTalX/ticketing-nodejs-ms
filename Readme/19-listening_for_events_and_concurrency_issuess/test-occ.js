/**
* put this file in some service with axios (client)
* increase num pods of orders & tickets (3 per each)
* connect to ticketsDB by 
    kubectl exec -it tickets-mongo-depl-5cd4bcb55f-mpz6d mongosh
* connect to ordersDB by 
    kubectl exec -it orders-mongo-depl-7ff4c7d965-7wlkf mongosh
* clean data in both dbs (show dbs | use tickets/orders | show collections | ...)
* run script
* validate the in ticketsDB->tickets all docs with price 15
* validate the in ordersDB->tickets all docs with price 15
* if so, no concurrency issues
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');


const cookie = 
'session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalkwWW1FMU5HSTVOalF6TWprelpHVmlabUZrT0RneVlTSXNJbVZ0WVdsc0lqb2lkR1Z6ZEVCMFpYTjBMbU52YlNJc0ltbGhkQ0k2TVRZNE9Ua3pNams0TlgwLi1ZaEY5N1VXcnllVDNSN194YkMyRko1aS1iMTZuN25SUXY1YjE2WEZmYjQifQ=='

const doRequest = async () => {
    const { data } = await axios.post(
        `https://ticketing.dev/api/tickets`,
        {title: "ticket", price: 5},
        {
            headers: { cookie }
        }
    );

    await axios.put(
        `https://ticketing.dev/api/tickets/${data.id}`,
        {title: "ticket", price: 10},
        {
            headers: { cookie }
        }
    );

    await axios.put(
        `https://ticketing.dev/api/tickets/${data.id}`,
        {title: "ticket", price: 15},
        {
            headers: { cookie }
        }
    );

    console.log('Request complete')
};

(async () => {
    for (let i=0; i<20; i++){
        doRequest();
    }
})();