import { pipe } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

// Replace this:
pipeFromArray([tap(x => console.log(x)), filter(x => x > 0), map(x => x * 2)])

// With this:
pipe(tap(x => console.log(x)), filter(x => x > 0), map(x => x * 2))
