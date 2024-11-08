import React from 'react';

import async from './../about/page';
import clientPromise from '@/lib/mongodb';

class getData {

    constructor() {
        this.clientPromise = clientPromise;
    }
    async GetUserData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('users');

        const user = await collection.findOne();

        return await user;
    }
    // Fetch data from MongoDB

}

export default new getData();