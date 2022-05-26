/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The address, use an array to specify multiple address lines.
 */
export type Address = string | AddressLine[];
/**
 * A single line of an address.
 */
export type AddressLine = string;

export interface ResumeSchema {
    /**
   * link to the version of the schema that can validate the resume
   */
    $schema?: string;
    basics?: {
        name?: string;
        /**
     * e.g. Web Developer
     */
        label?: string;
        /**
     * URL (as per RFC 3986) to a image in JPEG or PNG format
     */
        image?: string;
        /**
     * e.g. thomas@gmail.com
     */
        email?: string;
        /**
     * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
     */
        phone?: string;
        /**
     * URL (as per RFC 3986) to your website, e.g. personal homepage
     */
        url?: string;
        /**
     * Write a short 2-3 sentence biography about yourself
     */
        summary?: string;
        location?: {
            address?: Address;
            postalCode?: string;
            city?: string;
            /**
       * code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
       */
            countryCode?: string;
            /**
       * The general region where you live. Can be a US state, or a province, for instance.
       */
            region?: string;
            [k: string]: unknown;
        };
        /**
     * Specify any number of social networks that you participate in
     */
        profiles?: [
            {
                /**
         * e.g. Facebook or Twitter
         */
                network?: string;
                /**
         * e.g. neutralthoughts
         */
                username?: string;
                /**
         * e.g. http://twitter.example.com/neutralthoughts
         */
                url?: string;
                [k: string]: unknown;
            },
        ];
        [k: string]: unknown;
    };
    work?: [
        {
            /**
       * e.g. Facebook
       */
            name?: string;
            /**
       * e.g. Menlo Park, CA
       */
            location?: string;
            /**
       * e.g. Social Media Company
       */
            description?: string;
            /**
       * e.g. Software Engineer
       */
            position?: string;
            /**
       * e.g. http://facebook.example.com
       */
            url?: string;
            startDate?: string;
            endDate?: string;
            /**
       * Give an overview of your responsibilities at the company
       */
            summary?: string;
            /**
       * Specify multiple accomplishments
       */
            highlights?: [string];
            /**
       * Specify technologies or skills used
       */
            keywords?: [string];
            [k: string]: unknown;
        },
    ];
    volunteer?: [
        {
            /**
       * e.g. Facebook
       */
            organization?: string;
            /**
       * e.g. Software Engineer
       */
            position?: string;
            /**
       * e.g. http://facebook.example.com
       */
            url?: string;
            startDate?: string;
            endDate?: string;
            /**
       * Give an overview of your responsibilities at the company
       */
            summary?: string;
            /**
       * Specify accomplishments and achievements
       */
            highlights?: [string];
            [k: string]: unknown;
        },
    ];
    education?: [
        {
            /**
       * e.g. Massachusetts Institute of Technology
       */
            institution?: string;
            /**
       * e.g. http://facebook.example.com
       */
            url?: string;
            /**
       * e.g. Arts
       */
            area?: string;
            /**
       * e.g. Bachelor
       */
            studyType?: string;
            startDate?: string;
            endDate?: string;
            /**
       * grade point average, e.g. 3.67/4.0
       */
            score?: string;
            /**
       * a short summary of your studies, e.g. Thesis
       */
            summary?: string;
            /**
       * List notable courses/subjects
       */
            courses?: [string];
            [k: string]: unknown;
        },
    ];
    /**
   * Specify any awards you have received throughout your professional career
   */
    awards?: [
        {
            /**
       * e.g. One of the 100 greatest minds of the century
       */
            title?: string;
            date?: string;
            /**
       * e.g. Time Magazine
       */
            awarder?: string;
            /**
       * e.g. Received for my work with Quantum Physics
       */
            summary?: string;
            [k: string]: unknown;
        },
    ];
    /**
   * Specify any certificates you have received throughout your professional career
   */
    certificates?: [
        {
            /**
       * e.g. Certified Kubernetes Administrator
       */
            name?: string;
            /**
       * e.g. 1989-06-12
       */
            date?: string;
            /**
       * e.g. http://example.com
       */
            url?: string;
            /**
       * e.g. CNCF
       */
            issuer?: string;
            [k: string]: unknown;
        },
    ];
    /**
   * Specify your publications through your career
   */
    publications?: [
        {
            /**
       * e.g. The World Wide Web
       */
            name?: string;
            /**
       * e.g. IEEE, Computer Magazine
       */
            publisher?: string;
            releaseDate?: string;
            /**
       * e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
       */
            url?: string;
            /**
       * Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
       */
            summary?: string;
            /**
       * The DOI of the publication
       */
            doi?: string;
            [k: string]: unknown;
        },
    ];
    /**
   * List out your professional skill-set
   */
    skills?: [
        {
            /**
       * e.g. Web Development
       */
            name?: string;
            /**
       * e.g. Master
       */
            level?: string;
            /**
       * List some keywords pertaining to this skill
       */
            keywords?: [string];
            [k: string]: unknown;
        },
    ];
    /**
   * List any other languages you speak
   */
    languages?: [
        {
            /**
       * e.g. English, Spanish
       */
            language?: string;
            /**
       * e.g. Fluent, Beginner
       */
            fluency?: string;
            [k: string]: unknown;
        },
    ];
    interests?: [
        {
            /**
       * e.g. Philosophy
       */
            name?: string;
            keywords?: [string];
            [k: string]: unknown;
        },
    ];
    /**
   * List references you have received
   */
    references?: [
        {
            /**
       * e.g. Timothy Cook
       */
            name?: string;
            /**
       * e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.
       */
            reference?: string;
            [k: string]: unknown;
        },
    ];
    /**
   * Specify career projects
   */
    projects?: [
        {
            /**
       * e.g. The World Wide Web
       */
            name?: string;
            /**
       * Short summary of project. e.g. Collated works of 2017.
       */
            description?: string;
            /**
       * Specify multiple features
       */
            highlights?: [string];
            /**
       * Specify special elements involved
       */
            keywords?: [string];
            startDate?: string;
            endDate?: string;
            /**
       * e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
       */
            url?: string;
            /**
       * Specify your role on this project or in company
       */
            roles?: [string];
            /**
       * Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
       */
            entity?: string;
            /**
       *  e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'
       */
            type?: string;
            /**
       * Specify the goal of the project, e.g. 'Sucessfully introducing Scrum'
       */
            goal?: string;
            /**
       * Specify the contract authority, e.g. CTO, CDO, project manager
       */
            authority?: string;
            /**
       * Specify the industry of the entity, e.g. automotive, energy, health
       */
            industry?: string;
            /**
       * Specify the contract volume if not 100% capacity, e.g. 20d, 6m
       */
            volume?: string;
            /**
       * Specify your team size, e.g. 'Lead of 6 software engineers'
       */
            team?: string;
            /**
       * Specify importand stakeholders
       */
            stakeholder?: [string];
            [k: string]: unknown;
        },
    ];
    /**
   * The schema version and any other tooling configuration lives here
   */
    meta?: {
    /**
     * URL (as per RFC 3986) to latest version of this document
     */
        canonical?: string;
        /**
     * A version field which follows semver - e.g. v1.0.0
     */
        version?: string;
        /**
     * Using ISO 8601 with YYYY-MM-DDThh:mm:ss
     */
        lastModified?: string;
        [k: string]: unknown;
    };
}
