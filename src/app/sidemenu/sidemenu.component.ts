import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    version: string = "1.0.0";

    appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: '🏠'
        },
        {
            title: 'My Profile',
            url: '/profile',
            icon: '👤'
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: '⚙️'
		},
		{
			title: "Map",
			url: "/map",
			icon: "🗺️"
		},
        {
            title: "Promotions",
            url: "/promotions",
            icon: "💸"
        }
    ];

  constructor() { }

  ngOnInit() { }

    async leaveAReview() { }


    openFacebookProfile() { }


    openInstagramProfile() { }


    openTwitterProfile() { }


    openWebsite() { }

}