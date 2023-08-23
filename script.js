import http from 'k6/http';
import { sleep } from 'k6';


export function setup() {
  const url = 'http://test.k6.io/login';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  var data = http.post(url, payload, params);


}

export default function () {
 

  sleep(1);
}