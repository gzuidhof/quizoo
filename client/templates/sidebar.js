Template.sidebar.events = {
  "click .toggle-sidebar-area": function (event) {
    Session.set("openSidebar", !Session.get("openSidebar"));
  }
}

Template.sidebar.helpers({
  sidebarTitle: "Dashboard",
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
          name: "Meedoen aan quiz",
          url: "/lobby",
          icon: "fa fa-graduation-cap"
        }

      ]
    },

    {
      name: "Docent",
      links: [
        {
          name: "Statistieken",
          url: "/teacher/stat",
          icon: "fa fa-bar-chart"
        },
        {
          name: "Quizzes beheren",
          url: "/teacher/editquiz",
          icon: "fa fa-puzzle-piece"
        },
        {
          name: "Klas beheren",
          url: "/teacher/editclass",
          icon: "fa fa-users"
        },

      ]
    }


  ]



});
