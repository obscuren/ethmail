var ethidContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"renew","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"typ","type":"string"},{"name":"addr","type":"address"},{"name":"pub","type":"bool"}],"name":"setService","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"},{"name":"typ","type":"string"}],"name":"query","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"identify","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_new","type":"string"}],"name":"rename","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"typ","type":"string"}],"name":"unsetService","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_s","type":"uint256"}],"name":"setRetSize","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"unregister","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"register","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"lookup","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"NewIdentity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"old","type":"bytes32"},{"indexed":false,"name":"_new","type":"bytes32"}],"name":"ChangeIdentity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"RemoveIdentity","type":"event"}]);
ethid = ethidContract.at("0xc3984e799aff4077504ae0cdf4f9aa1b7137a96e");
