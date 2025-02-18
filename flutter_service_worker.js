'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e4d696587d22f8b84a33af4f64409178",
".git/config": "8c983c5408da024f26cda82056c86d9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f37b69026abb59c2f0c3cad1c5593662",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3263bfa1aac27ca8fb906ad5cf7d9552",
".git/logs/refs/heads/main": "7020f59a5807a08c9ca2e7c36493fda5",
".git/logs/refs/remotes/origin/main": "962cdee11728498d14f963bfcf3f170c",
".git/objects/08/16186b9e1ccbf0a2d5fc80c7197b061e51ff61": "ec3d46386e0695ced86ab934278e2803",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/2a39e3535d07d0fe34e2fe29939a63f6374233": "e9e58c9210ecd868b4f15951c66ce7b4",
".git/objects/0b/8506a3e81484d170f4bf07b04a606ec1e9d5cd": "019a9ec2d4955badfabd5fed34a67bb4",
".git/objects/0c/23aaa7c167bcb744e6eecc650a92d46b4ae6dc": "1b4916002c10a8a3607944d9f3211be4",
".git/objects/0f/8894053db5008a20d2f417b313422b3c4078b0": "0a8447ea41e6e72818bd12adc006a4b3",
".git/objects/13/09dc8517995a065a8c3b36e14ff5a05781c0a7": "85d9db3b822a54123c12b672e55aae63",
".git/objects/13/b50631da65e52fe696dd74da73f0a1c07de53e": "185456ef2c6d5ca85f3d5bd0e4521aff",
".git/objects/13/bb4c0f0ac9f4e69ff4ba864fc68f76fc4ac93a": "8ae3012f066a0b3f43615f90c7f04c41",
".git/objects/16/0c337e91a8a988eaee735b52714e51b6c3c2f1": "9201f306b27cbfac08aadd760147fa25",
".git/objects/1d/b1334a7911c92f0f4fe98192221a0dcc117dd4": "05255558fe79ab024c6946f449d1f58a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/7c31e89a44fcf14ec83085c3342c1c3cda1229": "9c9ef1ccabc3c9a20c0881c01216f152",
".git/objects/27/6387240952959cfb708eff8c19f89bfcd6c994": "4f9911018cb32da32782453279debcc7",
".git/objects/2a/5d65aa15975e139c323bc3dd2860da93cf18c5": "3d3896b8dcebb87f47b7f224d4cbf0fe",
".git/objects/2a/7daefe7e8ec137e19ffbc34c120afbb9b29815": "6f46a8fafa657fefeb39e8de7e0bc46e",
".git/objects/2b/bac6c0a72d784910872c7f83193d9301878a03": "de14493e115c61fdd57ab1f39c0c69ba",
".git/objects/2c/6b2c026844c3c7293d8ca6202330e82b448a93": "5b7e0de11386898c3a5dfe6b8ea8b66e",
".git/objects/2d/16f46b69c20289ba87ce99934ed38b7e1760c2": "aa106e4ac24f87ba87ebd80154d177f9",
".git/objects/31/ed033900105dbde9189717a3cfa38663b935bf": "14e25d00c9938c8883851c5825623e5c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/15c34d9606668f2dfd8f7417c935cf3fb3b1b9": "435ac219fd9975ca5632924cc40a32e8",
".git/objects/3f/bddb25e13dd34cf3f9c20ca79246accc475de3": "f91862fab7de2ed6a2ed79169a24e919",
".git/objects/3f/c80aae5b6c6a5936f7ddb4f3847994c8d2bd3a": "b905a838324d9e7a79a9ae302743911a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/5da2d4852a3237a8078485b266a95d97f19c19": "7c58619fd5eca4749b774977c5d6bd6a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/dd864d510f7aa36a47a64d231c564baeedbe24": "c77333475e24cbb41704c07ece21f92b",
".git/objects/48/5702550a2aa613598f0035162b38128bd00b4e": "b3b15c97fa5404d0da42bbbaaaa6bfbd",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4d/e25e81d09bb2af81e5cf3690e7d2fe94225dda": "4a0b61027de17c1acef8c9d0e1be856e",
".git/objects/57/51dd492a492b5eb7a038b2d8de1e290e132165": "1158a387cbce5a98844325eebd4c31e0",
".git/objects/5b/58393756e2528c1b94d547f0674c1b849460bb": "6bad0dc8a08923754ff0f8b907e8642c",
".git/objects/5d/0bb5b4290832bab8adc2bf6569fdb9fc701e94": "648c2f467fed9d1022c30de61a0ce439",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/d2ed8223fbefb434193ba31d8bdfa892d82c93": "54ec60b56ccbc296d1522502fb83cdc6",
".git/objects/68/16b9b9cf6dc935ae0aa2d9f5f6c01853cef31c": "f60c701edd6b270857f573151fc7a38e",
".git/objects/6a/ecd97210bcb92891504f4f39fbec9b5e8c3b9f": "10d02a5af072f2c58467d7e62eeb73f6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/b32b4c2e751d3f6504322ac786ca0eea723528": "8a8439020550588012f34a35c7c5bee6",
".git/objects/77/72d10db5659a34d367bcfa6085e456dbfe2a55": "9cb33e019e10dfeac0b48709d150ffd2",
".git/objects/7b/beba38e0d1cd2b1cba5094ca5487e040a3aa82": "3de7a2db3182cf773ad56dfda4e01130",
".git/objects/7c/6027043cafde788431e96518ce64fe72d8eb74": "91479906f9108390fcf3d4d5452ee486",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/86cb814d454302c5fc05a548bc28b24fd57fb8": "a373672041e8402c38b720eecb6d706d",
".git/objects/88/a80ba5597597cb67b9d98ae18b40b8038b454f": "7cb1221eecebcc139ea5f6d7ed651737",
".git/objects/88/c2851cb60c223452a9277962c56b0475169d50": "588b61540b66e4aeb2089fe08b7fb4b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0b9e736e4920b054a3aef4c37188cc36e3ecac": "40c10085502c9ccd28724d305852c67e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bd28aa976373f99d266c3c9e3de8c212c881f2": "a92474508b56b8dea0c1be39a8e83717",
".git/objects/8c/fcccfc21078aadeaa2a1e73acb4ec0c07a87ec": "3e18f01fa1be8f00ca9f9fc4bdfa2bbb",
".git/objects/8e/187706d07691ca4239564214b4ec46f074c8a6": "6fb3f2cc4eb6435bf4c2c9425b140ed4",
".git/objects/8f/cd1797451d3367f77bd7a9657bbdc261673567": "678abe1e94f52c1efeb22c68492b9c33",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/b65553455fb43453c8ff4e24a69997db4c1f9b": "d1d71c0510d33a02db3882c8fd444c02",
".git/objects/96/c00bae7dcbb9377b1a7bc9b67292356b509bca": "da8ad2df4c47b281364275a3342776eb",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/cb36acc43a82baf38b5cca2d0b9ce213aed3d1": "b7c0a7f3f8a310c9ae1b2e3a95c502f1",
".git/objects/9a/03d792577cf3c9ab0350bd7a64b0f3396e9441": "892e359fce3117895ca7c7bd378adeeb",
".git/objects/a5/be258a17096044bee8f1da073cd294b9952df6": "f2bec328e68b05bae235512089c78db2",
".git/objects/aa/7dd73fa44f9f97884872fd7fec2e9cd45c12d4": "fc6a68422dde117a217b44df90ef38e2",
".git/objects/ad/a95602965d7e2ec0bb42bc0bb8ab003cefe9ee": "34078748b26e7610c49c7014f430bc60",
".git/objects/ad/f5cd8919dff76a682cdc16c5d5793ffc4e3c9a": "62e6cf2e352b6777a10c999af86bebcc",
".git/objects/b0/55ad957dda9af7be8c6fd9a5e671cf47778182": "ee447a69f7873814d7bb7dd79b147453",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/95e90c7c7dafe687d74a4ba9739bbe3296592a": "539166911a62f4cda8230fec362affc8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cf830812b7c29352074dee52b3c38c88afa96f": "632954b877161c215fdcf5ef45fd1753",
".git/objects/b9/db324527d4866d79d85d0c001b4b7fe806926d": "afb8c201ebb898c41227a4bc78e4caa0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/b1decbbd27e33c2eff4fd1e133dadf00f57a0b": "e4574af394846b735828a04be93bca18",
".git/objects/bb/a9855d30c512af77fa3541dd8e9f41ae3cc45b": "01351f8aaa8a5cec9363c30ad79ba16c",
".git/objects/bc/57c32fd9b28b791a08ba857e7ee37abe414649": "2277b79e388979e997bbe38b9e3b74d3",
".git/objects/bf/686e8546b3d58e6613e592ab35d6e75e5b2564": "d0bf20ff5d80c6b7729718e598f684b3",
".git/objects/c1/656d54d210b3896aec82fbb36bae9e89d7bacd": "6639b05ffec9cb5819b866f7ca1dd56d",
".git/objects/c4/24ebea04eae5b813009966e0512ace2ab16eba": "ff8863cc1361fa48d884b9c3c40b536b",
".git/objects/c6/5e9ee371a7b79b770569c417c8a67f85cb5526": "171bb08242295b73aca793d145b51029",
".git/objects/c6/61a79a5c1137fa271af6a1e48c8bdcb19ed7e0": "33b68f4ee153baa3f9877b09c42e8b1d",
".git/objects/cd/5a88034a6baaa77d3146270378a68d21f3c9fa": "d0d43b4d01f80ba4489156f3026d0138",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/bf0d663bfdbad04a103f570bc447b270421032": "5cb071c0ce4f241f0773dfeed4b860d8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/bb832749486c1ce677afccabe397221dbe0eb3": "3bb9f75f9d92591195ced672c2900df8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/cf26237438192e4393dcfb152b85b6474ec102": "060d9e1e17f0affa055dbcdc4d1dc1cb",
".git/objects/e5/c1e0afca406d068cae3526ad6f8382fefad471": "683883870f77dfa5f4d81e764cf7fdb9",
".git/objects/e6/9ee4c023fb970608e4620e735d7ddf9a9bc5aa": "0112e612f6216af76b2796736d0b6904",
".git/objects/e9/5b4141701e987001aad917c17d74362fae4f65": "cce833d122e0bff63b3fa184557943eb",
".git/objects/ea/abdef76fcbb8ca1aa8666a38efb791d67a321a": "36929c219062272b91e0e374a56dd692",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e055765f18b4f00e24cbb94d5e5473ab8b2e57": "cbe847c68dcab3770f04ba0bf4ec4017",
".git/objects/ee/f11e3b5e27f03dc914bf88d1c52d7a549e2652": "cda5e7e5125073707c1d0300514873f5",
".git/objects/f0/d15afb5d2ac6df81a9c30f4bb79ba0434ad679": "eaa1d10e0a04f27e28a8af647cc44c68",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/257804508353017c2d91b3059fba78440f7200": "65fe038690a777b5f13a25f166c55e06",
".git/objects/f9/3a32b09e727fbc6c7e2eae93361a519fd2097d": "063a60253b23228f9d533bbccd0a3455",
".git/objects/fa/8dc03ee77e7ac5c6d30bd435d086eda3e7af27": "7aa062ab362d5988b1455c14674197a7",
".git/objects/fa/b8cbfa9ac4d11fd1952ff613fe56cc4b60f7ae": "6aaccbdf77d5a2940a5a9f7dec4b826b",
".git/objects/fb/263f41f16bfbec03264e3d9eb1e6bdde76fe04": "355873735c127a8d22cb47010201a2d3",
".git/objects/fd/d946908d803b68cb80d757558cce9cb92b4417": "2b8a905c78cf8fe1dba0f639617d993c",
".git/objects/fe/0970d3258d5735f1ccced42aab502682613f6b": "9e2a79a54d2b5daedb0e1c13d7c595ca",
".git/refs/heads/main": "8550028d46914e8c6c8826952134ec54",
".git/refs/remotes/origin/main": "8550028d46914e8c6c8826952134ec54",
"assets/AssetManifest.bin": "b90063e176e35b7598bde75f8fc4d07d",
"assets/AssetManifest.bin.json": "15094d58b96a6d03fb834289b6c7d229",
"assets/AssetManifest.json": "f8d87e8b5953aacba05103b40d104777",
"assets/FontManifest.json": "e77e2e5f91ef8c52d4e5745eff5de103",
"assets/fonts/KodeMono-Regular.ttf": "f8ad3cd837565a9f7d47b2ffb88beb1d",
"assets/fonts/MaterialIcons-Regular.otf": "1e291541c5fb96eb0b5c19c2f4ae068f",
"assets/images/2048.png": "2c0f50790236a5370efa9ce576d506b5",
"assets/images/adaptation.png": "722ad394005498401083eb2ffe35df78",
"assets/images/agile.png": "426d86b46616cdd875bf8c9326178c54",
"assets/images/anglais.png": "5f1280bb565c3bcb4df86fa7e0572170",
"assets/images/batterie.jpg": "bc16487936767664bd1674a06ebaade8",
"assets/images/biotrade.png": "97e939a2e655181e61ded59a198c305c",
"assets/images/bloc.png": "f2e7e6bb46aeeb9263bf320f6620f027",
"assets/images/bourdelle.jpg": "e4e06e08c784fd4fbbd11dfcb12564df",
"assets/images/C.png": "21f09a1397772ba16924a7a7ed1790e7",
"assets/images/compresseur.png": "7f631e15b67f4ed3c17fc8c0d87ecddc",
"assets/images/cs.png": "668eeb6bb812e2292784332e72778cc2",
"assets/images/css.png": "89b9bb843746e97e9d3c8b4223616fa1",
"assets/images/curiosite.png": "1d2cb734c828d1f102396aa283cc3c54",
"assets/images/dart.png": "06c09a7eb40203a0789ea0dcca5d957a",
"assets/images/docker.png": "7d41965fb18f96b4b58cf71a08a12b5a",
"assets/images/eclipse.png": "b751228cfaa4c42d108c7cacff7341a4",
"assets/images/ecriture.png": "f1528a405a48828f12e465a3247ecf98",
"assets/images/elaastic.png": "71c67d1390efb335dade02c74d54a1dc",
"assets/images/etudiant.png": "c37203ade2e45e8dcd8152ec4e4e2f4e",
"assets/images/firebase.png": "d85939bdd2fcb93b4a5df5bea431d53d",
"assets/images/flutter.png": "6b423ff89815b96c10a44b62f913916e",
"assets/images/git.png": "dd45c492496ec2a48f082bf133554a02",
"assets/images/gmao.jpg": "e9dacaaceaa2fedf4b9797e6c9f2a0c4",
"assets/images/html.png": "5237e49cdf9648871ff6235af5dc7140",
"assets/images/italia.png": "bf1b87ea14e2613a0e83d6cfdd8daba2",
"assets/images/java.png": "b5f8dd2e29df2779077c2b8e1eb266f2",
"assets/images/jetbrain.png": "4195379fd21c1bcf96365f1ce2f7914f",
"assets/images/js.png": "728a778828e4fb98c3fb0070d23fe681",
"assets/images/kotlin.png": "2ed34faeddac78db009dd2e4a1d9aecf",
"assets/images/laravel.png": "3b258761bbe15f2998e59eca98b60a5d",
"assets/images/linux.png": "ee688b1da6dcbf9a22ea8e2f7208e977",
"assets/images/mcalculator.png": "6e20ab30912b6fcfb5db993bb1a0c0f2",
"assets/images/moi.jpg": "ee0032655e6a72d828a4979adc49ad9a",
"assets/images/moi.png": "55e3d5ffb933738541136a41719dd9fb",
"assets/images/mongo.png": "dc22d4b5e216d2bf7c78e269791300d2",
"assets/images/mysql.png": "f758004861723a4144df6c2058a047bd",
"assets/images/nuitdelinfo1.png": "00071e91b5990fbe579f1a6f75d0f373",
"assets/images/nuitdelinfo2.png": "966505c385f08e9b46913664f7e3344a",
"assets/images/php.png": "1fb63070d208d68aba5552d49f1db3ad",
"assets/images/powerlifting.jpg": "5aaf6b6f7461cd0e984aa4744321781b",
"assets/images/programmation.jpg": "8cc4e3407a11172cda492b0469a6875b",
"assets/images/proxy.png": "8285abb0dfd77c2acc1cd855e010dcd1",
"assets/images/python.png": "374d04c9d0e35095f25e0b28bc436114",
"assets/images/rigueur.png": "9d2d9ac4f6ed1205ceab6b32ad276341",
"assets/images/rust.png": "60ae7394e379d59f59341d3055f49f5f",
"assets/images/sante.png": "12d55cc80e717f2fa38c952d8cec7ad8",
"assets/images/sport.png": "1d6acae5b7e97545ab59a0172082ec0b",
"assets/images/sportAutre.png": "d2fc60cade8a92949533373b350deafc",
"assets/images/spring.png": "4e33f1b2ad22be146c7a2e0c309bb59f",
"assets/images/symfony.png": "c5da04ac8eae68aa18703c9139dbca4d",
"assets/images/takuzu.png": "e8352974e02d4017ffbd010e25bf3432",
"assets/images/tesm.png": "5a211ad71b436898f8ac55bf37f4bd46",
"assets/images/yams.png": "60e84a13114235f814514a624902b7af",
"assets/NOTICES": "09d5d73e8380dde6fe7e6242e1ec6f02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "90580190a5349ea2d3a73ccca4c41e4a",
"assets/pdf/cv.pdf": "bb4d55a98afd765f185d0636eabf1048",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/video/cv.mp4": "aaf495a78140426dbb91efb8fbaea30d",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "368db9975e3cf6c068dde36f711efd33",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16557fa3d93fd184288a9cb24c8adb37",
"/": "16557fa3d93fd184288a9cb24c8adb37",
"main.dart.js": "2a1c65a2affe2e8adb0ddb05de140842",
"manifest.json": "539d26c272e3fa98f851e64ddd11098b",
"version.json": "a97ecd7f6742a8f29b5e2aa0e862b4b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
