<template>
  <div>
    <div class="content-headers">
      Experience
    </div>
    <div>
      <div class="row q-ma-md justify-center">
        <q-card class="q-pa-md full-width shadow-15">
          <div class="q-px-lg q-pb-md">
            <q-timeline color="pink">
              <q-timeline-entry heading class="text-grey">
                More than 5+ Years of Professional Experience
              </q-timeline-entry>
              <q-timeline-entry title="Bitmax Professional Bangkok (Thailand)" subtitle="November 2017 - Present (2+ years)" icon="trending_up" side="left">
                <div>
                  <div class="text-h6 text-grey">Senior Software Developer</div>
                  <q-list dense :bordered=false padding class="rounded-borders">
                    <q-item clickable v-ripple v-for="(exp,index) in bitmaxexp" :key="index">
                      <q-item-section class="text-left">
                        {{index+1}}. {{exp}}
                      </q-item-section>
                    </q-item>
                    </q-item>
                  </q-list>
                </div>
              </q-timeline-entry>
              <q-timeline-entry title="Verti System Global Indore (India)" subtitle="April 2017 - October 2017 (6 months)" icon="done_all">
                <div>
                  <div class="text-h6 text-grey">Software Developer</div>
                  <q-list dense :bordered=false padding class="rounded-borders">
                    <q-item clickable v-ripple v-for="(exp,index) in vertisystem" :key="index">
                      <q-item-section class="text-left">
                        {{index+1}}. {{exp}}
                      </q-item-section>
                    </q-item>
                    </q-item>
                  </q-list>
                </div>
              </q-timeline-entry>
              <q-timeline-entry title="Bentley System Pune (India)" subtitle="July 2014 - April 2017 (2 years 9 months)" icon="done_all">
                <div>
                  <div class="text-h6 text-grey">Associate Software Developer</div>
                  <q-list dense :bordered=false padding class="rounded-borders">
                    <q-item clickable v-ripple v-for="(exp,index) in bentley" :key="index">
                      <q-item-section class="text-left">
                        {{index+1}}. {{exp}}
                      </q-item-section>
                    </q-item>
                    </q-item>
                  </q-list>
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default
{
  data()
  {
    return {
      bitmaxexp: ["Designed dynamic websites according to client requirements and wrote appropriate PHP program scripting commands to ensure accurate data is retrieved from database.",
        "Migration of current application to Laravel REST API and Modern Front-end Framework Vue.js",
        "Designing and developing REST API using Laravel. Obtained hands-on experience of working with different open-source technologies, agile and scrum methodology, and understood the entire SDLC in corporate environment.",
        "Responsible for developing interactive User Interface UI applications and professional web applications using Vue, Vuex, Quasar, Nuxt, HTML5 /DHTML, Bootstrap, XHTML, CSS3, Ajax, SASS, jQuery and JSON.",
        "Developing a Single Page Application with Vue, Vuex, Vue Router, Quasar and Laravel.",
        "Responsible for staying on top of industry tools, trends and ideas to be used in overall cohesiveness,functionality and appearance of websites.",
        "Developed an Investment platform where user can invest in any Fiat currencies and crypto currencies.",
        "Adding 2FA and Mobile authentication for securing application.",
        "Conduct peer-reviews of PHP application code, ensuring that all code complies with team standards.",
        "Experience in developing and maintaining Fintech Application with PHP Laravel Framework.",
        "Experience working with Blockchain frameworks and created business applications and platforms.",
        "Installing, configuring and maintaining cryptocurrency blockchain clients for backend systems to make json RPC calls using PHP.",
        "Researched several secure technologies for security and scalability for transactions, which includes Blockchain technologies like Ethereum and Bitcoin.",
        "Knowledge of SQL and SQL databases such as Oracle and MySQL.",
        "Document the development process, architecture, and standard components.",
        "Performed debugging and testing of the developed software applications, and ensured the product delivers expected results.",
        "Well versed with Gitlab and Git version control system."
      ],
      vertisystem: [
        "Involved in development of Frontend, middleware and database of applications using HTML, CSS, jQuery, AJAX",
        "Planning and implementing capacity expansion in order to ensure that the company’s databases are scalable.",
        "Creating and maintaining stored packages, procedures, functions, and triggers.",
        "Working with Migrated the application code from Oracle 11g to Oracle 12c.",
        "Experience with Agile process, monthly Sprints, and daily Scrums to discuss the development of the application.",
        "Contributing some back-end experience, collaborating on APIs, and more.",
        "Gathering requirement from Client and Business Analyst and develop application accordingly.",
        "Prepared Technical Specification, Functional Specification, User Guide and another document.",
        "Review code from other developer and involved in fixing defects.",
        "Used various tools like GIT, WinScp, Phabricator, QC, FootPrints.",
        "Maintaining source code on GIT.",
      ],
      bentley: ["GUI Development as per business requirement.",
        "Creating and maintaining stored packages, procedures, functions, and triggers.",
        "Working with customers directly for gathering requirements and providing solutions.",
        "Designing, developing, and debugging applications.",
        "Reviewing the code written by other developers.",
        "Create and maintain documents as per company standards.",
        "Assist seniors to prepare technical specifications from functional specifications.",
        "Developed RESTful API to communicate between systems.",
        "Worked on Microsoft MVC to develop backend of application.",
        "Fix the security issues (SQL Injection, XSS etc.) in application.",
        "Develop software, architecture, specifications, and technical interfaces.",
        "Develop user interfaces and client displays.",
        "Help developing data models.",
        "Preparing the install build of software. Preparation of training manuals for user.",
        "Testing the product in controlled, real situations before going live.",
        "Maintaining code in source code manager (TFS), Managing application servers.",
      ]
    }
  },
  computed:
  {
    layout()
    {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}

</script>
