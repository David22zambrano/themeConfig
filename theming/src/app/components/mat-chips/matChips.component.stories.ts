import  {storiesOf, moduleMetadata  } from "@storybook/angular";
import { MatChipsComponent, MatChip} from "./mat-chips.component";

const matChip: MatChip | any = {
    title: 'mat-chips',
    done: false

}

storiesOf('matChip', module).addDecorator(moduleMetadata({
    declarations: [
        MatChipsComponent
    ]
})).add('MatChip has not been done', ()=>{
    return {
        template: '<app-mat-chips [todo]="matChip"> </app-mat-chips>',
        props: {
            matChip
        }
    }
});