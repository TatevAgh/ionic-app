import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDarkMode = false;
  showChart = false;
  headerButtonText = 'Open Chart';

  constructor(
    private navCtrl: NavController,
  ) {
    this.initializeTheme();
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.applyTheme(this.isDarkMode);
  }

  toggleTheme(isDark: boolean) {
    document.body.classList.add('theme-changing');
    setTimeout(() => {
      this.applyTheme(isDark);
      document.body.classList.remove('theme-changing');
    }, 100);
  }

  private applyTheme(isDark: boolean) {
    document.body.classList.toggle('dark-mode', isDark);
    this.isDarkMode = isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  openChart() {
    this.showChart = !this.showChart;
  }
}
1
