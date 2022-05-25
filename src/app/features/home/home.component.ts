import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Color } from 'src/app/shared/color';
import { ColorsService } from './services/colors.service';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  /*
    The selected color is set to the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.

    The "$" in the property name is an angular convention to represent that it is an Observable.
   */
  public presetColors$: Observable<Color[]>;
  public selectedColor: Color | string = '#ffffff';

  private dataSharingSubscription: Subscription;

  constructor(
    /*
      Injecting the service into the component, so it can be used in the template.
      The service is injected into the component using the constructor.
     */
    private colorService: ColorsService,
    private dataSharingService: DataSharingService,
  ) {
    this.presetColors$ = new Observable<Color[]>();
    this.dataSharingSubscription = new Subscription();
  }

  public ngOnInit(): void {
    this.getColors();
    this.initializeSubscriptions();
  }

  public ngOnDestroy(): void {
    /*
      Unsubscribe from the dataSharingService.
      Required for subscribe to stop tracking service property changes when component is destroyed.
     */
    this.dataSharingSubscription.unsubscribe();
  }

  private getColors(): void {
    /*
      The get() method is called on the service, which returns an Observable.
      The Observable is then subscribed to, which returns the data.
      The data is then assigned to the presetColors$ property.
     */
    this.presetColors$ = this.colorService.get();
  }

  private initializeSubscriptions(): void {
    /*
      The data is received from the DataSharingService when the user selects a color from the dropdown.
      The data is received from the DataSharingService when the user enters a custom color.
      The data is then assigned to the selectedColor property.
     */
    this.dataSharingService.setData(this.selectedColor);

    /*
      Subscribe to keep track of any changes to the value of the replaysubject contained in the service,
      being fired every time the value is updated.

      The value is then assigned to the selectedColor property.
     */
    this.dataSharingSubscription = this.dataSharingService.getData().subscribe((data: Color | string) => {
      this.selectedColor = data;
    });
  }
}
