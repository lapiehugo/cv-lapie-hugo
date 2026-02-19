export const resumeConfig = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        about: "About me...",
        email: "your.email@example.com",
        phone: "123-456-7890",
        website: "https://yourwebsite.com",
    },
    seo: {
        title: "Your SEO Title",
        description: "Your SEO Description",
        keywords: ["keyword1", "keyword2"],
    },
    languages: [
        { language: "English", level: "Fluent" },
        { language: "Spanish", level: "Conversational" },
    ],
    contact: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
    },
    skills: ["Skill1", "Skill2", "Skill3"],
    experiences: [
        {
            company: "Company A",
            title: "Job Title A",
            startDate: "2021-01-01",
            endDate: "2021-12-31",
            details: ["Detail 1", "Detail 2"],
        },
        {
            company: "Company B",
            title: "Job Title B",
            startDate: "2020-01-01",
            endDate: "2020-12-31",
            details: ["Detail A", "Detail B"],
        },
        {
            company: "Company C",
            title: "Job Title C",
            startDate: "2019-01-01",
            endDate: "2019-12-31",
            details: ["Detail X", "Detail Y"],
        },
        {
            company: "Company D",
            title: "Job Title D",
            startDate: "2018-01-01",
            endDate: "2018-12-31",
            details: ["Detail M", "Detail N"],
        },
        {
            company: "Company E",
            title: "Tessi",
            startDate: "2017-01-01",
            endDate: "2017-12-31",
            details: ["Detail Tessi A", "Detail Tessi B"], // Now, missing comma added here.
        },
    ],
    education: [
        { institution: "University A", degree: "Bachelor's", graduationYear: 2015 },
        { institution: "University B", degree: "Master's", graduationYear: 2017 },
    ],
    projects: [
        { title: "Project A", description: "Description A" },
        { title: "Project B", description: "Description B" },
    ],
    hobbies: ["Hobby1", "Hobby2"],
    theme: "light", // or 'dark', depending on your preference
    labels: {
        primary: "blue",
        secondary: "green",
    },
};
