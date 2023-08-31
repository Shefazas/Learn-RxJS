import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { Switchmap2Component } from './observable/switchmap2/switchmap2.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ZipForkjoinComponent } from './observable/zip-forkjoin/zip-forkjoin.component';
import { CatchErrorComponent } from './observable/catch-error/catch-error.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatMapComponent,
    ConcatMap2Component,
    SwitchMapComponent,
    Switchmap2Component,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipForkjoinComponent,
    CatchErrorComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
