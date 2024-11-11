import React from 'react';

import async from './../about/page';
import clientPromise from '@/lib/mongodb';

export class getData {

    constructor() {
        this.clientPromise = clientPromise;
    }
    async GetUserData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('users');

        const user = await collection.findOne();

        return await JSON.parse(JSON.stringify(user));
    }
    // Fetch data from MongoDB
    async GetProjectData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('projects');

        const Projects = await collection.find().toArray();

        return await JSON.parse(JSON.stringify(Projects));
    }

    async GetEducationData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('education');

        const education = await collection.find().toArray();

        return await JSON.parse(JSON.stringify(education));
    }

    async GetCourseData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('course');

        const course = await collection.find().sort({ _id: -1 }).toArray();

        return await JSON.parse(JSON.stringify(course))
    }
    async GetSkillsData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('skills');

        const skills = await collection.find().toArray();

        return await JSON.parse(JSON.stringify(skills))
    }

    async GetExperienceData() {
        const client2 = await clientPromise;
        const db = client2.db('portfolio');
        const collection = db.collection('experience');

        const experience = await collection.find().sort({ _id: -1 }).toArray();

        return await JSON.parse(JSON.stringify(experience))
    }

}

export default new getData();