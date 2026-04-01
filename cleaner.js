import { rm } from 'fs';

rm('public', {recursive:true}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Removed Previous SSG')
    }
})