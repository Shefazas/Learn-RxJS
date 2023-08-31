import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { CatchErrorComponent } from './observable/catch-error/catch-error.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { Switchmap2Component } from './observable/switchmap2/switchmap2.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ZipForkjoinComponent } from './observable/zip-forkjoin/zip-forkjoin.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'asyncawait',component:AsyncAwaitComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:'',component:ListComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'of-array',component:ToArrayComponent},
    {path:'custom',component:CustomComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component:TakeComponent},
    {path:'retry',component:RetryComponent},
    {path:'debounce-time',component:DebounceTimeComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replay-subject',component:ReplaySubjectComponent},
    {path:'async-subject',component:AsyncSubjectComponent},
    {path:'concat',component:ConcatComponent},
    {path:'merge',component:MergeComponent},
    {path:'mergemap',component:MergemapComponent},
    {path:'concat-map',component:ConcatMapComponent},
    {path:'concat-map2',component:ConcatMap2Component},
    {path:'switch-map',component:SwitchMapComponent},
    {path:'switchmap2',component:Switchmap2Component},
    {path:'exhaustmap',component:ExhaustMapComponent},
    {path:'share-replay',component:ShareReplayComponent},
    { path:'combinelatest', component:CombineLatestComponent },
    { path:'zip-forkjoin', component:ZipForkjoinComponent },
    { path:'catchthrowerror', component:CatchErrorComponent },
  ]},
  {path: '**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
