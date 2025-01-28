import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { WhoIsItForComponent } from './pages/who-is-it-for/who-is-it-for.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { SchemaComponent } from './pages/schema/schema.component';
import { ObjectsComponent } from './pages/objects/objects.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SelectComponent } from './pages/select/select.component';
import { CrudComponent } from './pages/crud/crud.component';
import { GetComponent } from './pages/get/get.component';
import { SetComponent } from './pages/set/set.component';
import { RemoveComponent } from './pages/remove/remove.component';
import { StorageComponent } from './pages/storage/storage.component';
import { EventsComponent } from './pages/events/events.component';
import { HooksComponent } from './pages/hooks/hooks.component';

export const routes: Routes = [
    {
        path: '',
        component: IntroductionComponent,
    },{
        path: 'who-is-it-for',
        component: WhoIsItForComponent,
    },{
        path: 'how-it-works',
        component: HowItWorksComponent,
    }, {
        path: 'schema',
        component: SchemaComponent,
    }, {
        path: 'objects',
        component: ObjectsComponent,
    }, {
        path: 'properties',
        component: PropertiesComponent
    }, {
        path: 'authentication',
        component: AuthenticationComponent
    }, {
        path: 'roles',
        component: RolesComponent
    }, {
        path: 'select',
        component: SelectComponent
    }, {
        path: 'crud',
        component: CrudComponent
    }, {
        path: 'get',
        component: GetComponent
    }, {
        path: 'set',
        component: SetComponent
    }, {
        path: 'remove',
        component: RemoveComponent
    }, {
        path: 'storage',
        component: StorageComponent
    }, {
        path: 'events',
        component: EventsComponent
    }, {
        path: 'hooks',
        component: HooksComponent
    }
];
