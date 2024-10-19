'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "37fa5d77ebae352d9e2d896d56245a80",
".git/COMMIT_EDITMSG": "0afc44f7cce6c6ff62174ef759f4234a",
".git/config": "df0a1fa85530ea1ed129804219121b04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "672a9a5afd3119c82fd2637d399cc729",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72da74a6285082d66401c816b43810a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc6ccc852c2015f7eac37897aadd9e94",
".git/logs/refs/heads/main": "41bbab63d601fe0e11c3c6d727c952f2",
".git/logs/refs/remotes/origin/HEAD": "1ae8e0969b5df91cd57d91332dbdf1ee",
".git/logs/refs/remotes/origin/main": "7dc59da67763ca2e81c7cfae759b7499",
".git/objects/00/512fd328a943cd2eb340997c607baa01b380f2": "0c4802cb0df142d53df14a908f84cb44",
".git/objects/00/543d70324df8fa9fbc0bfc6d1655511cfda3b8": "18fb9bbda2d49219b35856cd7e3366d3",
".git/objects/02/f57843cf5c836dcd349ac53e093c7a0cf4ebd8": "6dfcca116ea403b7626dd4f8ac2f1ed0",
".git/objects/05/e01d2aab1c2932283e9f4a4e366681721e8bb9": "51a723be3d622f8983ec2fc36cecf9f1",
".git/objects/06/8c818b99f861b7c17142797e55b113a8aa02e3": "b75e581ad5c5efd4e711e008f4705080",
".git/objects/07/84533273cc17df625da3811c5fac2ab37b6832": "948d3ddd10512e06eca09af1e12e33d5",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0b/4cfe18bd3c14f0f850be89b50f34e3ac192fc0": "1c3e3f3d363b618db7c2b85f59ea70a4",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0d/ebfb9b396e29d9c5ed21dc858d71502a30c465": "93bec56539456e29bcf6059310616680",
".git/objects/0f/9466f71650f02a09efc23476e8858b50eb29a7": "2d80de5d65a444719d0dedc02a5c61a7",
".git/objects/0f/c2fb21f5ad3c1ea04e2ecbe7417b4c9ff08ed0": "ba419c8d3f448ad2ac2d9d1c7a2bd34a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/8d095da8db9568ae549dd7fb8870b05f0ee807": "f7fa410e7ad1e245c13d2824268ba1df",
".git/objects/13/055d9e1ea749f28bcac665eff061fb34431edd": "c4f01bc498845b4b986c23c87418d16c",
".git/objects/13/3d0e95ed69e56c3a49ffe2b9d406cf9b9a69cb": "7ffaaa5ebebd5077a816161248ae05a4",
".git/objects/14/133df38e709600dbd4ef208f1c42a9e29c419c": "b935c8826e7a645b241eea7a4e59798d",
".git/objects/17/17340bf610c6f622185395167886bfb8836024": "54395c946b79a0238f512e57eba95ab5",
".git/objects/17/947e6813f7a33864458816ab6996cc5a70b897": "4f882e1cba6af79cd8f4a52756f39776",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/bf66725ac6748851e878fc35561c932a6cc563": "09c7576d28ceb22afdc42109172d3070",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/e7cac70c995e5a558365a0e6806c98bde07faf": "88528f760130d150e40466c103028d05",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/22/fbbfd83bb914626ec0606cf9b4293258752b10": "0e398438d795e25ad19d417b788840cb",
".git/objects/24/6348feabf647ad068a85523054c560ace7a92c": "ef92fac57b5445f99eef3b5f7224a4a4",
".git/objects/24/e52c6e6b7de163b6405741ab1a5cb00dea3fe9": "9b5ff0ef4debb04ce50d9c527b9245cb",
".git/objects/25/27230a81e9751bccb72bd9e0aba585fd803197": "85a924a74a8c5fea87decb40cc3dab71",
".git/objects/25/6437815aec286d696174ae1cd8e96a054e0bc3": "6d5be2a73074c776ffc72bd83d24eacd",
".git/objects/26/0ea583f1eccca89a6851b1587435219f111193": "93bc3cf0d2259bf3e1829334ed84c25e",
".git/objects/26/29fb68e2e7b9223ce6b4d86a09d9a10dccd7e4": "c20952791259daf3b41279d2f1982ce3",
".git/objects/28/1a924a58a351e9f5673a44a8aeda28629f2f6a": "baed8fb63e2a1f57f05ac428e0566b00",
".git/objects/28/340ff9d873bfaa7f578fb256c958aac8678a72": "c36f1a230b69209cbfe7f39a743cbde4",
".git/objects/28/ca0a07ac38cd1bce58bfaa7aadebe9bbceab7b": "5f4b72d99ca6635dd6a40dcdca32373f",
".git/objects/29/528bc6d7d9ea16550a58519fb76eb6884f08e5": "38e6d14b186f9cd3bdf53d559410bd73",
".git/objects/29/75e906b36c847ab6f465dd8a7fa1cba35166cd": "dc3af48713219b957feb25c0716300c3",
".git/objects/2a/2b6bf8c2d7c3a2ebf543983cac401dec8c9cb7": "0b4e8b17395d3fecab19798df9344ecd",
".git/objects/2c/f4d18076e69955822ac07e019c3a0ea13dcbdb": "e9b2e09e1142815edec52b24feb9d583",
".git/objects/2c/ff641c4b3799cf3369511fb4732465693b4e96": "b9757f778c62a9ec6339881fb08653ff",
".git/objects/2d/05c0512a636e6dc8a2e0d162c3c129ad47eea1": "6cb4256ec4dcb289e0982477813359fe",
".git/objects/2d/3562826a0d1b87670160e5bf0808ce514c8dc8": "904b7fb7900faa351d5cae3f71a23b58",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/31/d4dedd544999fe7dcc40ccd04052dc9dbfffc6": "be2aed5b5b8f5151b13ccc679830a6f7",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/10d95888929e1d11496229e5d70a422d287307": "17761293a6e6bbc10fce7ab62c6dc5cf",
".git/objects/36/b844bb38d5ee9ce13813f3b218899e8c9d8ab0": "94181ab83a7eb8f80112e551c1e7d6b1",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/39/e55043e6cf8a077f1d1678a776cec64dd0f4e2": "8caf30418a8f54b05addbd12a64b505a",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/be13f102743b30a6a337f6235c537e09dd82ca": "1feccc3946259f5b6b7548b98f2e2776",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/41/a93c60bd8f66db62816fea36f5351808c46c64": "af414703fed75f409d4bb778619dfe73",
".git/objects/42/d64e934b0e90552d465aef4da8e4cdea88019c": "edc05c39ffba645928050cd095a24bc5",
".git/objects/43/56233ac2cbeae4559b4f67c1c828976941ae6a": "1151e3014546f4021ff97e854419ec45",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/c66c4a356d2ea7db7027907e1e2ac5b2ba9ca5": "c332ddf54cd3f87ab7eadd1b3af7d60b",
".git/objects/45/7b8e97b66022cf6fecb28712703884255671df": "a4fa89913d0835c190309da99800f80d",
".git/objects/47/926fa6d6bf5f15be025b8c00bc6176c45c3e1a": "4d5d2f1ed52483266363b8696f04bcb2",
".git/objects/49/18fe27e5ea577b2ed31626ce0922b77bf57112": "42d382d264f8cb3025f51c41ba6f9c7f",
".git/objects/49/40f8ee533d2d827fa4dd5766100714d648a403": "9b2b152935aca520282a8d1e42b93792",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/bcb6faa8cf42712c9f334b27bd3f8a023e75fa": "e84bfc9b3c4725f9bb61bee61ee5d662",
".git/objects/4a/5ef1665f7a2fd46cefa9e543c50b468b4b758e": "bd8b7751147c06332c4a21d9874603c8",
".git/objects/4a/77048009c23b97976f8064e2753f2722c6d15a": "67c35332dddc4c32b17e2b841c142168",
".git/objects/4b/b176d18a39946fbd75216f78f14e951cc64b56": "6e1eefc765d54e154ae87bc834c2193b",
".git/objects/4b/b71b09ceac0ffa2418779beb0e88c309bfa779": "6e679c54755684ed6c7fbba5a53fae77",
".git/objects/4c/59d861872842ea49a4ec8241ef5e197901df61": "717e362a317cef43b76be3905344cd3d",
".git/objects/4c/cafcf1eac6b3840ecd8040014f2bb42ad02b76": "f8c53a697dc37e4a09cd495b8a26295c",
".git/objects/4e/4499aee212bbb1d46a477e4dafb75903271688": "e4233ee331635dc32ad82364a8cb2bca",
".git/objects/4f/37492ada739862c71ee8f7733ecc78cecf0318": "56bf5b8b475774134b242228cc0fafc9",
".git/objects/50/07eea1cb33ffca59e22d3bf96e4af998745d4b": "046fecdd2fcb500825ab361c2f341a64",
".git/objects/51/eedde838d6579a3f816b55eab82eeea8e8d205": "7d5d0260668333f0bd2655a5f892e5c2",
".git/objects/52/8562b2d0f5409e91019a346c8f81354e42ae25": "0037484d77e7caaa3f699f48dc6d3875",
".git/objects/53/371d09bb97b92d6cf143eaa98f01db5597efbf": "015b4e0e79aab0932f609c627809868b",
".git/objects/53/60d7fd294064d97ac1db574978e593fe298382": "5608c0c54380fe5030da16af1a43015c",
".git/objects/53/80adadcef9a69f9ef20be6fbd779eb6557e526": "1f9c0d71f933d03b15ef0ceac4c3ae62",
".git/objects/53/9ed2fecff05c5df8572ee808983d66f7268110": "5b78ef1547a7e3359505eadc1dd98924",
".git/objects/54/6deb9f9edcccac80f87c58ac2b5869b27df32f": "d63ec18277cca9845cd312513d556272",
".git/objects/56/270d8e85926eacc47222713d9690fa2b3bb1fc": "5ba42a6da067c27dcf743e51cb20beec",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/96a36679ea5b8ddd988558b264b332197b17e1": "fb1d68bcf9b2818003ba0bdef2d6ba21",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/ec8805e34e26809a893d0ac7d766b907beb1a1": "3cce680e055842469daa720494c56087",
".git/objects/5b/6ca387a6d9f2212c52fe42557ce1217483719a": "8afe1d210bb60ab566a0d92a20ac443c",
".git/objects/5c/29e9d4a97912f779e1c33780aae4609746d9a6": "ed74a7cd3b1db5b278730fbb81da9fa6",
".git/objects/5d/27936fba40fba7b95afd86383fe4929fe89159": "4c7e20907574a9698b5dac85dd3d07d0",
".git/objects/5d/adf6e5399cdf87140e7a60d9f8d2e937e71e7b": "a04614259d6f35add7583ec2e8d6e4e3",
".git/objects/60/b25ca72cec8a9e7037700ad00bf9c6b83737b7": "89881fd758fe98e0d4fc6321de7c6620",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/1b6999d5143136c4046b8a750382e93e2a0843": "50f061842cc5b387ffcab54f008c97fe",
".git/objects/66/edad192f0b75af48c8216b6f040d0be332b8d9": "4d8b2bd349ad367c26d40202f4ec5fc1",
".git/objects/67/b692c7afc4135172b21b41508e25e9f0538aa3": "ba9160afd2230ccf9226ba2507119a99",
".git/objects/68/232aeac2565b1bd6777914570695ac5ca09245": "06f36e594b237d21fd5fe6cb18b5a5c4",
".git/objects/68/74df63b2eda942269c257c0b7cc52da9c86434": "4fa2b0afd4a06a3d06a9e51f5fc530c6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/69/a4eb6a217b915e26005ce243d174c84035c8b1": "14fbeef815c6de327bfb009aa45317b8",
".git/objects/6a/2c9d4c1f242183b5e005bc9c46343754a65982": "78809a2a2c9316ffcd81b6342cb4c1b7",
".git/objects/6a/8d0938969ad792184453c876e3c39871b43619": "15a0092019a2ccb9725dee677ef877e6",
".git/objects/6b/7122b33847c27517dcdd4585e48dd149a51a88": "c5748bfcd6202b966e9d36fa499d619d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/bfad1ade1ac4e4e4aab8040ec8961a21916fa9": "01964d39b4651fbfab77f42eadab8818",
".git/objects/70/ba2c75e2999321b5f7490ffb324a018fa0228c": "3b3ecaf44193c99158776984dff9a1bd",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/9c0af39a8c27c2abf2f2cb1860dbbd772a0b32": "b64306a84a9c158726efa0c7b6ae3d81",
".git/objects/72/2036c4fcaab8e365a6830c13de0fedbaab6a00": "9cce926107ee565589baae0b67b1aa9a",
".git/objects/72/768c94d30db171914bc8af58fa7a38f85724c1": "5f12012436aedbc7a57b41ef873b3cc9",
".git/objects/72/8061ca3ffc702cefd98185ff3dfc11d62bf108": "46578332d66b75a4171c411938186ed9",
".git/objects/73/38e3110bf37b9b8b5cedb22d2cf5d74e0bedbf": "937d9138a2fc2029e99d312a0130df67",
".git/objects/74/178e9c2699e527801afd9ac3dc73a754a52a3e": "7fb5ecc44461281ba6557bd1687d256e",
".git/objects/74/cbf17c553c1e1d79a7d51876ec9d0eb898a215": "9bf95aeff22569e3bba7ca6caec783fe",
".git/objects/76/1f2a4689d6ed0c15f18953a8ec7e4e9c54ad32": "2cf8581acb993278b3af95df2af95037",
".git/objects/79/c47a99427b0e2b752645f7e5f942383d1040eb": "4f67c5bc9a7a639bdde9ebcd04c5f4fd",
".git/objects/7a/1c3d14ee710c31b2f023fd3d0a8337d45275a3": "334077c023182598578fcac9908520aa",
".git/objects/7a/7a8309633c847a8242f3a4ec1c69b6aa14c540": "767404b3908fc82f8040e2d60848eb41",
".git/objects/7a/b50da540c4fe0cd6e27457af60233e1aed7f30": "87345f5731f03d95b3d3284a69504f78",
".git/objects/7a/d12a4da9b9426512cd7d08dea346eac3f2b9e4": "7c184ada94d12c134035432285e7b776",
".git/objects/7a/f9fb4420e3851e67c228388a491b908d08b63b": "c3fddd40d590a847ae43452253325766",
".git/objects/7c/9236f1d749d0dbcbebec6528dbd74995285e0a": "dbe66939698d0bdec966844fca85a559",
".git/objects/7c/b5edffc44c39702d13244b3e92d11b78af7587": "2cb864b3c8c95cacdfaa3e17025954ad",
".git/objects/7c/ba13668e514f1f32af59ed5594a03e256e6b06": "5c804979228f022f226b4dc3e8d7eb37",
".git/objects/7d/085bba948901e1f61812a5bff6082591506ca5": "73b494a798e962b4febfa8544d1b481a",
".git/objects/7d/71f1ca2c29504ebcd62b7dbc9d528db637a3d0": "7add08a58cb55c2583d812de9ccbdb9e",
".git/objects/7d/a86486ccbfbb850267ae6f61e9645cb3edcf9e": "3c1cecdabb3bd9c87fe73f6da776c9df",
".git/objects/80/112c871b21b0a9fb90d26f44f2953b8e40a4ef": "39269633e6050a7551d41a7b501bf9c2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/95c5f9ac037b98197977c27e45ee93881e87e2": "6f71608349771f9eefa4deafe9a6021c",
".git/objects/84/b2539406cd93f9aff24809ef62223bab691581": "201a99c1052bc64c819c1b1a68f4a5c7",
".git/objects/85/1e64b1d9d14fb8823355f4c53a73384767858e": "4a05bb7c8fb37423d257de090a5b8b50",
".git/objects/87/3e897e4887a6916f3d50d411533c2bdb5e2aaf": "b3ec1316a64405b2970b19dd47fce91f",
".git/objects/8a/a56c1771aa9e07aad4509a7274b4fb1a1cae3e": "db816259985f492de3a14379d54edbf4",
".git/objects/8a/a82701451ab2174778aa78bbcdacc816ff047c": "d808175ea8497072a504660972e4c70f",
".git/objects/8b/8a94d2c59aa7a68c909dc2620d6c22747c0ee5": "cbd4dc620cf9253bca8f6cceff30f5be",
".git/objects/8c/ef0a8ea2179013317c70cdffb3ed9e7482029a": "b5190596b6d1b73d92101ee7bfcace62",
".git/objects/8f/0918171e70a43e7890a7f1372c02c2ce533421": "cfed92f23cb361dfd53db059b0f6edfc",
".git/objects/8f/dc8e2db6fa062ec9561ee1330ea88aa57eb5bc": "8f7e9428b80815a91daf26daa6f4d1b0",
".git/objects/8f/e376ad524ffdefd8d478498b5afda29ddc39e9": "f5185fc7aa9d8b099881d7ff625f3b9b",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/a71e05dc5f70e0c88ea6e8e2225db891668f42": "3084ac54dd66c8632db3a4355847d5b6",
".git/objects/92/fc3013c2283ccd5c4d8cd47f391d0434ddbbb5": "db000bbd38ffa675794ca937c89bc030",
".git/objects/93/27164ac55e5ab93a02760b1219f69e4adfc525": "bf991fced26cf280505566298c1fc408",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/80fb706d7ec818793f22f896d6cf921a5a2a90": "802f8d08ab22670e5d48c0549c9f9d15",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/d3cd9aa60c20c426362c91c5ebf9a83569d651": "ef52037f5928761cc23cddeb8daebcc5",
".git/objects/98/0e275f23712fc83d9df240d9aacb19c6f27c21": "bc0cee73fc0640424ad94691e36c817e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c10f11e0e8003c07426eda037604dfe67f1aa9": "20147db378af6001bbb5191b6471b20f",
".git/objects/98/f64efbd2863ca453c093131b2bef62aee27f83": "781955c2b6c8ec72665cf0ddf57ec4cc",
".git/objects/99/dfdcd6200eb03ddc8d345b45e3f9e0908bb78b": "7b508951b52289067cb8e9930d819fcf",
".git/objects/9b/1cdf772978cb12c92a6ea64b9505d83be6e1c5": "8e71e34b34c459c040099a55d91f2e97",
".git/objects/9f/1d94b1cd1afdae20ca32f725fd3da3a1fb4b34": "35c9342fb57416d9cbde3a2e63e91e82",
".git/objects/a2/93d45481117a1581c5d6efe38db5310d855cd0": "6ae361dbe148c1356e64b62f28f65d76",
".git/objects/a5/2a5d363b1ae88a44cdf501f94f33b1a3715d6a": "7123ca83a72ed32ac9d24268f019f87b",
".git/objects/a5/57691322db24b3ee1e8b6b8f7b7187fcb9bc05": "aa8f9197a9c2efc896afa15aac06ee2a",
".git/objects/a5/dc286a551d90b29e9d0f4d674a115a325c1d1b": "bba9d198ad07f30bcf71fd98cb80b959",
".git/objects/a5/ea786eb9a227f10db4790b362a4dad8789814c": "25505919ab4ee4aeddcb1759c8f8bb40",
".git/objects/a7/63780eaec3ddf10e4f090649d7d9a575f368c3": "a2245c06bebfaade1a08d6b8f23b3954",
".git/objects/a7/ca3ac9fa78edd327496122ab42c935992dbf59": "d3ab70172f4c38d1e67be631859f95c6",
".git/objects/a7/d92b76ee243a235967e115f8e7df14ad0d7a5b": "cf38784473f63a0ccee32a9dab0048a2",
".git/objects/aa/3702732489a9daa6886053c8d59f066b680c08": "a64400db23f2b2803341e916d0d13876",
".git/objects/ab/280b53b28cc3c852a17a8f81d2f765eb6ba86d": "f7be4ed75080669e17faf61cd8bf70bb",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/e7c893f7f8fa20fb7d10e177f240ebf8532ccf": "45457467aca4c70a9ac46914fa8104f9",
".git/objects/b3/4c2bb46af665a1c2b677cf2880611965510a45": "ca65df0bfd3097dfe89c8d927a21079b",
".git/objects/b3/9fd2887e7507913eb3f4361dbf90756bbba152": "8ebe190946b83cc76a3c8296f456668f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/9972a11162fce746df20eb6df302bbb48e3257": "4d1a6a7d6c681e1e48e330d0922538ca",
".git/objects/b5/148168ed8177105c7b57a4065e08ed1ecb2f92": "84dc221765c9207a985c3178c952c0cd",
".git/objects/b5/6c0b7c9ca5a0f0e4af85e760692201811bb820": "71528909db0c7a7b1516a02b046a8111",
".git/objects/b5/c44b564ba0e6af1a69cce347a60e6d59dbdf1c": "9e603deb20290cfcfeba53509aacae25",
".git/objects/b5/fd585ff974929a25cc2b5cf11166be0e6a8dff": "a25f0805b4e89cbfa7b515a4b02e3797",
".git/objects/b7/9b0385c6aaef2c8e4dc82b8756d26775cf3e1a": "7c33544850bb932987e4df7f3adf1a44",
".git/objects/b7/a9bf71e4b35d538dd1b089aad20d70b0808091": "980c6ea7dabd858830fd968074287fcb",
".git/objects/b8/6ac10e1c04fa4fa6d7d0cef8c9af0ccbe06ca4": "5fa7b35c8a0ac91c3e510be936ff7d29",
".git/objects/b8/7b743df3543ffb1214f074027cf46f8e95c290": "6879016d6ce6c7b1b45959fcb2d96ad9",
".git/objects/b9/8e7019c789245351ab848895bd2cbe597e5b1f": "ce08625b9a344a5b901dd97718ccfc69",
".git/objects/bd/030069ad24cc7e42dfed31ce80eadd9899a737": "3dbe9ca0bda3916fd7377e77bc8f1a23",
".git/objects/bd/a57d280a649f269a39d8466054d157da8e5e0a": "1ae02f569cb881db53114d1921bf7e23",
".git/objects/be/25777e220d30abf2a425c0677b77890bcc8e77": "b16b3378eb8fc337820c78457f10649e",
".git/objects/be/81598dcdffc2d80d3abcb7799542f2417bc53d": "7acc2c37bbeef6a4995c83b2f898bb89",
".git/objects/bf/8161fc18ff1ca9e54b1fb24d02a1260d2e48e6": "398d4d91a4f8c10e92cd706b31821b53",
".git/objects/bf/f2be3a831c79cbaca8413d0bc9157a4f9eb1cd": "38f2b39f4ae5b5b39b25f7b0e7b1892e",
".git/objects/c0/b6c7c015b96de74cd672766c4ab9c04ab67721": "3e51520b2737d6d244e66b6a880f1cd7",
".git/objects/c2/af55edc19afbb7a5b710cb34242515af52bafc": "0476ff724b053075a49ee7dca336d60e",
".git/objects/c4/48185a6cdc184d804baf525efa22ab4031ff00": "51262907734b57b64a0855ed076a0109",
".git/objects/c5/fdac3a40a14fa08c782ed01da45b1fab3ddd7a": "373904f861fc1c381480aefa85c70086",
".git/objects/c6/0836677b311310ea44d70205bac6bb0d00b365": "ed6161cc80d5b6cd525743bbc8e40b3d",
".git/objects/c6/2fabbfe156384373311e78e9252d14418419db": "ecf61072cf7b31bd6d089cb71e46a787",
".git/objects/c7/c6e3561af2038c1455dd80b18cc1cef9353d3d": "a3295e0dd1e75fb5f8ffaa539406e072",
".git/objects/c8/d14066c623e53e579ecfb15bdd695b4632ebb0": "f7509a7d1ae5c23ec35fbd94305b97fa",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/5e07438f159eb03e0874735524c85f0b215896": "9511835605c72e1e644d846d561abd0e",
".git/objects/cf/f3cebcdab38622c0e4c8e9ef9990ace0f1b063": "c99d8004b3aa66663413cc99f2dd5cda",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/cbaeaaf428fb81b4329530cc6e6004ff5685ad": "68c3a32b55e3cefb63d2c99f98973285",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/56763e58acb21b4472ae7fd11608ee0bf27406": "3854a2144d473a980fcc2e0762d78294",
".git/objects/d7/e6e4a9cd46c6507e5d822541221aca7da06200": "e866a84f381da49b0f7c928c7dd51c4a",
".git/objects/d9/4b99142b374c8f5100de5c68f2630bff4c46ef": "f82bbf0dfc7bf22fc08d6cb2da7f8af8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dc/6053b1f0916b00bbd7015b7bdc03f7bc4dcfcd": "0cbb228550828405c48feb355c7906cd",
".git/objects/dc/bcedc08ad8dc7b39c59be11ac7e99b01c4767d": "a2416ac8400887bbc9313e8cb4fd4e76",
".git/objects/dc/d76d391f38e2ea8acc87643ebda20568a93ae7": "162e32d0ec67be4cba35844352d9dc70",
".git/objects/de/4b1f8b58790f6acedd3770eb4e66fafcdb585c": "894c421ee5e5f705601cb0f5ecba91cb",
".git/objects/de/6e5b9e91c03f19ce65cc83a7dfb1426dc428b3": "8948ecd9d5f6a1265a97ae6ae4cdd504",
".git/objects/de/b32ae2684e855ec0881f5407628f05d6423f11": "a162aad61e8d0e3d9988678ea58eb027",
".git/objects/de/e8c067a934aa5757c4b49e241ba19a9c6c8893": "52e7b215d416bb987064085e0c7d0afb",
".git/objects/de/f30456e74ed17e144cb173e12d429cb60f560a": "c2233bdfb464ca224970a14d3da6abe3",
".git/objects/df/074e39e870f825f625995ff840f465afd6141f": "a4150a11b2b6d50bd8fc11dd45ae5669",
".git/objects/e0/24776cbd63d68f627871fcc795b399faaec423": "4e0d59d41472c49573e7602e188e50ff",
".git/objects/e1/33ec2bf0a0f27b98414ce1d57bb1ec3d553011": "e83a796a6f7df320942519637a3278a1",
".git/objects/e3/3afd43473e10754779197293464292358090d0": "e08f61245169235aeb83666a6504c98e",
".git/objects/e3/941ea559ca53267125606512831d508145b8db": "69952ca3e4af3d0ae080514a5a12a7b3",
".git/objects/e5/625e4d78379eb8cabea7ba3b35931f4267080c": "a2ecac706869930ec0c61fedeebd60c8",
".git/objects/e6/a7a483d1167e42c0c94fa2e0bfc3683c38b63d": "989055379e3413a0bf32979cfa8aa16a",
".git/objects/e7/2b9b680312a3bfc05a696c0cee57c11960cd8d": "74188f8f736a6a636bd292848d546855",
".git/objects/e7/5cb457b974f7ff8ef052389c48e088ab562841": "a1e6b44d57dcf29f72067435dc04f894",
".git/objects/e7/bfdde494f7e21bd8e02bbce15df16970cb6b5d": "b00dc74b9af6b854224baa555d08ad0b",
".git/objects/e8/e6b7ee3723338fdb586b344401198bdbb32e91": "0f903912cd7a2ce3fe00a9067385c129",
".git/objects/ed/8b446cdc289aa837e0a8979d680657a5cb299e": "134107ceba12f01624c726d3673ec8d4",
".git/objects/ed/a2a961723436c1786eca1c728706caf5475713": "22e569084db297dbe594d172bf10499a",
".git/objects/ed/edacddfd9d19239245484d1857c21d799f9854": "827ae06b6eb8ec5b1e9082a6c4a22b95",
".git/objects/ee/0f3c34eb9fac4eb77d1cb8e6cd590345891b68": "a6ef1189245c23c84778c1cc5f72d1e3",
".git/objects/f2/f9af303ad27492e82f26a05b09245d14384d58": "3df07bc36817e64dde3421e76a7274eb",
".git/objects/f3/8b0b07afd8474b0fd8cfad0c8c62abd537c8e6": "081e29ba2e74b8a49dd7477c3842ef7e",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f4/f6a53d7f28cd8434896f28c26cf120272ff92e": "b790563820792c4f093e404a3f0d3ec8",
".git/objects/f5/c2fdcf69cd070c309ca7f3c03f09905e36caf8": "449c8e01655b46a5655728636a1731c6",
".git/objects/f7/515edcb5fda1f8ddb2e03f6203d35f831464be": "0372551b68509fcede3b150f07c0ed34",
".git/objects/fb/65839ac60cd6d6e204eebdeed52b36c8e7d73d": "962527fc097cd108c3cc08b4ead3039b",
".git/objects/fd/2f12e9d014c52ed091ffa0fc20fe935e5cbf78": "f2ce679ff9b312a5c5817133f50ae012",
".git/objects/fd/787a81c3e608898214c09e62216eefa8f2ba90": "ffec126c6bfda0bcc1ee33fc3e64bcf3",
".git/objects/fd/da9cecc63161e860f5258862bf61777323e19d": "759fba81105a9711add1ae402c71fcbb",
".git/objects/ff/321a8c4ce40feb1cddf34e776a493c5e5c2a78": "1c59eeeca0df89a1c5d882698f6d1314",
".git/objects/pack/pack-f5fcb512092884f4489dbbaa878cbed04f56320a.idx": "28d9c095d2ea873d0dc4a4d291752da1",
".git/objects/pack/pack-f5fcb512092884f4489dbbaa878cbed04f56320a.pack": "996c0e5aa1a68a319305dd4caa60e632",
".git/objects/pack/pack-f5fcb512092884f4489dbbaa878cbed04f56320a.rev": "dbbdd635ce7e42e7449f2bdf298c2c87",
".git/ORIG_HEAD": "c551340ea1d353950b687e504bc1de70",
".git/packed-refs": "6e732744c2a3bf3de19397cf0700526d",
".git/refs/heads/main": "60fff3185a41a1461ad5763fb03d9b18",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "60fff3185a41a1461ad5763fb03d9b18",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "9b6d35d89c29fa4cd2540e4cd08c4c56",
"assets/AssetManifest.bin.json": "2614cb1f5485d197a62d9fe2bff9ae8d",
"assets/AssetManifest.json": "8144e3b8280d82d754cc7b69c6f4d2b0",
"assets/assets/fonts/Diphylleia/Diphylleia-Regular.ttf": "c64ea36c6f04231770e8798fb6058503",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a67f4df02f4d73bb8bfd5bff421e4d1f",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "75c4176c64611f32faf01a5de7631877",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/Urbanist/Urbanist-Italic-VariableFont_wght.ttf": "4a875201edd86825f213e268124d301e",
"assets/assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf": "bfeaaa729391fa9dfdfb3ae36cf5429b",
"assets/assets/images/artc_validator_1.jpg": "b56296564dbcb7add31838b5a7b4e4d9",
"assets/assets/images/artc_validator_2.jpg": "bb1a4a4259839b5ed1455b06cfe3e865",
"assets/assets/images/artc_validator_3.jpg": "7ee40ae244d8995cd9ac60b68563b557",
"assets/assets/images/artc_validator_4.jpg": "4080ebcd0da817d3f867369aae3dd949",
"assets/assets/images/artc_validator_5.jpg": "056daa5569eaeb41072b9a69333497eb",
"assets/assets/images/artc_validator_capture_dark.jpg": "597e05f33fa1702604ac53252d134dfb",
"assets/assets/images/artc_validator_capture_light.jpg": "cf5087875f96e93b7c80dc6d7091b22a",
"assets/assets/images/artc_validator_icon.png": "dafc7706faaa8d178f1923a3f3fcbe55",
"assets/assets/images/bloc_icon.svg": "d3339074235b31e7806390778235d184",
"assets/assets/images/bootstrap_icon.svg": "096ef739dcd43aa15f87315d0ecff0dd",
"assets/assets/images/build_performance_1.png": "7267db94343a55520774d125c1f07a6a",
"assets/assets/images/build_performance_2.png": "682f45033b09742785813c178edc1c7c",
"assets/assets/images/build_performance_3.png": "cb86a446bc8691f0d032c389e6c1216c",
"assets/assets/images/build_performance_4.png": "179a3cf7cdfa5fd422a6c067d08130b0",
"assets/assets/images/build_performance_capture.png": "8484d3d3cc1f3e42b079aff266cbc7be",
"assets/assets/images/build_performance_icon.png": "3ef42a152ff839de958124aeabfe887c",
"assets/assets/images/css_icon.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/images/dart_icon.svg": "199f37d1337635b30204323e8abb38cd",
"assets/assets/images/django_icon.svg": "afe9510219cc2ca71fada25138b48e06",
"assets/assets/images/elementalschool_logo.png": "29d55b5d040f94b29f71ae6a2bb09d8d",
"assets/assets/images/firebase_icon.svg": "aa4193dbc02fec52a3942cced49ad6bc",
"assets/assets/images/flutter_icon.svg": "ca80af9552061eaf65c58a9ca5e0bf90",
"assets/assets/images/github_icon.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/images/gitlab_icon.svg": "56b68d89875d1fa8a5c927200e49d3fb",
"assets/assets/images/google_play_logo.png": "f6cc83e5d4406c2ecd7565eee5ff6cb5",
"assets/assets/images/graphql_icon.svg": "8e507e8521a5ece236a31e392d8781fd",
"assets/assets/images/highschool_logo.png": "a1ee6f2e149de4b1f9a7fe8a4e9373a5",
"assets/assets/images/html_icon.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/images/java_icon.svg": "c690b7a95b5da03fab6d0caefae16ccd",
"assets/assets/images/js_icon.svg": "75a2cc3393300119a5446751dd63c0ab",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/assets/images/mariadb_icon.svg": "01686ca976fa1ebeba1b6a2770e1a59a",
"assets/assets/images/middleschool_logo.png": "b8c2493f2b6fa706cb88b65dbe706463",
"assets/assets/images/mysql_icon.svg": "12c85f32d11a67556487d94178f41e2c",
"assets/assets/images/opencv_icon.svg": "c229ba5dd070b2027bf2a062112577d6",
"assets/assets/images/oracle_icon.svg": "c4c5c7841593af6e31efc8d7ed4b6155",
"assets/assets/images/python_icon.svg": "0c66e49a42b83a459619335570b14bb2",
"assets/assets/images/slack_icon.svg": "48a3232b44d5ac5cc40f44ae6941373d",
"assets/assets/images/sliding_puzzle_1.gif": "0e4aa2ef9f0551331b30d977c5a65eb0",
"assets/assets/images/sliding_puzzle_2.gif": "06a2e4eb5842b7627dec68f7ed06c6a0",
"assets/assets/images/sliding_puzzle_3.gif": "6f146a63fb3d1fae779a8f7aafcd6094",
"assets/assets/images/sliding_puzzle_4.gif": "9fc7304be2e6e04c63ec745a5bdc09a8",
"assets/assets/images/sliding_puzzle_capture_dark.png": "7db5ae9b1abb498cadce7f5bb0c04f9b",
"assets/assets/images/sliding_puzzle_capture_light.png": "2077dfa35233db158bf3dbc67ed7f1e9",
"assets/assets/images/sliding_puzzle_icon.png": "9837d1388c55f951c12fdf9ed326666b",
"assets/assets/images/spring_icon.svg": "b11b1cfa0e1b72f9cb10e43f85dfd9d7",
"assets/assets/images/tensorflow_icon.svg": "dfa1a98ecce2698d6a986c858519cd3e",
"assets/assets/images/usw_logo.png": "2f71901a246839d828225ffd24fa1f60",
"assets/assets/videos/sliding_puzzle_1.mp4": "e07bcf4660cd6acd882ed7c52b3260c2",
"assets/assets/videos/sliding_puzzle_2.mp4": "92e4c622612b0ae715de84a43bd7a374",
"assets/assets/videos/sliding_puzzle_3.mp4": "f28aa094cd82b280ca08e8402f6f8c30",
"assets/assets/videos/sliding_puzzle_4.mp4": "99ec2cd766ee6e0651e45631e828fd8b",
"assets/FontManifest.json": "cab0067f917c1fe5da6c67bbae551a69",
"assets/fonts/MaterialIcons-Regular.otf": "e3f4ddbd7dfd288a649d22dd62018856",
"assets/NOTICES": "f6a5206d0fa0f3503f67eff3a3bd58bf",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
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
"favicon.ico": "68818d659e9357599823ac623e473011",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fbd417381a31c3a6131bc6d18fa5ead8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0c369739c86c9f50c8c28e70d874f35",
"/": "a0c369739c86c9f50c8c28e70d874f35",
"main.dart.js": "fd4b7dfa0693c9f7bc2637a9a8b8c914",
"manifest.json": "4a42ab657293f7f8b40c8ba37d9c021b",
"version.json": "c49069c0f21d8e9066a96392d1020971"};
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
