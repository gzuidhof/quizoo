Template.sidebar.events = {
  "click .toggle-sidebar-area": function (event) {
    Session.set("openSidebar", !Session.get("openSidebar"));
  }
}

Template.sidebar.helpers({
  sidebarTitle: "Quizoo",
  sections: [
    {
      name: "Navigatie",
      links: [
        {
          name: "Overzicht",
          url: "/home",
          icon: "fa fa-home"
        },
        {
          name: "Mijn profiel",
          url: "/profile",
          icon: "fa fa-user"
        }
      ]
    },

    {
      name: "Leerling",
      links: [
        {
          name: "Meedoen met quiz",
          url: "/lobby",
          icon: "fa fa-graduation-cap"
        },
        {
          name: "Superkrachten",
          url: "/student/powers",
          icon: "fa fa-bolt"
        }

      ]
    },

    {
      name: "Docent",
      links: [
        {
          name: "Dashboard",
          url: "/teacher/dashboard",
          icon: "fa fa-tachometer"
        },
        {
          name: "Quiz starten",
          url: "/teacher/quiz",
          icon: "fa fa-rocket"
        },
        {
          name: "Statistieken",
          url: "/teacher/stat",
          icon: "fa fa-bar-chart"
        },
        {
          name: "Teams beheren",
          url: "/teacher/teams",
          icon: "fa fa-sitemap"
        },
      ]
    }


  ]



});
