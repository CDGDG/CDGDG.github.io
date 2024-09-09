'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9a28e40d58938998efd96015ac8d80fc",
".git/config": "df0a1fa85530ea1ed129804219121b04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a76191f2333ff256ee23b4f6f65ac12b",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bda1ef722f346d60615c260aee73646f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a86db3800d42a63a792ac37bfcab6141",
".git/logs/refs/heads/main": "a86db3800d42a63a792ac37bfcab6141",
".git/logs/refs/remotes/origin/HEAD": "f751be60c981acea2178d52ee9861d6c",
".git/logs/refs/remotes/origin/main": "88b0e3eaee0b5c7e9a8f1d900ba88e9b",
".git/objects/00/512fd328a943cd2eb340997c607baa01b380f2": "0c4802cb0df142d53df14a908f84cb44",
".git/objects/02/f57843cf5c836dcd349ac53e093c7a0cf4ebd8": "6dfcca116ea403b7626dd4f8ac2f1ed0",
".git/objects/05/d757e28888d6b8d88066cbffc37c1567bc0f27": "737bb2eab81b40cb18290a005a6acb6b",
".git/objects/06/8c818b99f861b7c17142797e55b113a8aa02e3": "b75e581ad5c5efd4e711e008f4705080",
".git/objects/08/034a2da537c554af0556ca85fb7d6a51ceda8c": "de3290d39e68634cb2e6b98d25b0d1d5",
".git/objects/09/27b8133cfc1ed1c326677f8f1275fae4529606": "a610c88a483a5433f49298b8a9c2bfdc",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0c/9172bb890e03dacd04d02fcbeacb25dff04ac6": "48d948c0aadd02d655671b0e956d1e9e",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0d/4c80e76f822956c350f85c1704b990302519a5": "9437270dc747aa5d3695f3b749d788ea",
".git/objects/0e/d1f25a6da307a96d46c7a2c15f88d26ed5d85d": "a239786172a0a955b37452330b40c39b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/e62a0a7acee2955bc5eda3503cd2e387bd3f9d": "58378faa02dc1d7710a14e7b6e216110",
".git/objects/11/4a79b143e283276daf6d47b6296468022ceaf9": "c0db867ad0529c45bfa09bfc1dbaf1f2",
".git/objects/12/99fef0f3a4f0bb7bdb2d0d054df48f00c03af9": "a9dcfd6adcad7e8132b67166436a36bc",
".git/objects/12/ad776b122466a6d5dee4141f1b1ad4aee992a4": "e72755cd6a750b796bc4750710cdc8fc",
".git/objects/13/055d9e1ea749f28bcac665eff061fb34431edd": "c4f01bc498845b4b986c23c87418d16c",
".git/objects/13/3d0e95ed69e56c3a49ffe2b9d406cf9b9a69cb": "7ffaaa5ebebd5077a816161248ae05a4",
".git/objects/14/133df38e709600dbd4ef208f1c42a9e29c419c": "b935c8826e7a645b241eea7a4e59798d",
".git/objects/16/15c36901847bf233b59a659eda0ca59e19c488": "397bd7b3b42938d1c65494a8704d3075",
".git/objects/16/cad409d021099b9a0d9257f6061d7d3da03dc3": "8fd76fdeb97bd70d7a456f4e5eca362c",
".git/objects/17/947e6813f7a33864458816ab6996cc5a70b897": "4f882e1cba6af79cd8f4a52756f39776",
".git/objects/18/5c46afc88e32ae0e6bca8cf694599ec28e24fe": "5d3a0a34d75a5ddd79116d9be8fcb9aa",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/8460abb7fe96823f1a5598df24f545b64e9aef": "3f343240c31426b229a91c8a01dceca8",
".git/objects/19/bf66725ac6748851e878fc35561c932a6cc563": "09c7576d28ceb22afdc42109172d3070",
".git/objects/1d/338280eae369406ae4a80bf11a37acdcb5b077": "89b692b6719e6790d2ddbfa3402bcc77",
".git/objects/1d/fdb5a9eedf0408025c69c55c242e1ffcb9e508": "0c1fceace1843032fc7f3db795512d13",
".git/objects/1f/d5f2ff204c3dc33017c1f944cd676c5a3730d1": "c18225476f56f7007730fcef34d45576",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/ea3b56e0cc4ecb0fc9cbf41d6f54f7f33f8f2c": "09e56696db7bdad83250db7dd0907e8c",
".git/objects/22/27399bc43448191b32f2a478b6a2fdb94d58d3": "b26e1bff48b63a118a18397418fe79be",
".git/objects/25/6437815aec286d696174ae1cd8e96a054e0bc3": "6d5be2a73074c776ffc72bd83d24eacd",
".git/objects/26/a0c2761c19eaf3c0dccd228576bc7a857274ce": "f4b1f468ec1c6105b4d17aac648619fb",
".git/objects/27/02696875837927b90b9b7418e852e7ed0ac909": "fa5ab2a3bcfe93c652501e2427f163a0",
".git/objects/28/ca0a07ac38cd1bce58bfaa7aadebe9bbceab7b": "5f4b72d99ca6635dd6a40dcdca32373f",
".git/objects/29/75e906b36c847ab6f465dd8a7fa1cba35166cd": "dc3af48713219b957feb25c0716300c3",
".git/objects/2a/5fbcfb737168768020e988c3d2b4caf0733d99": "ea6bee2af6f16a6ac0e4f4443170ed04",
".git/objects/2c/ff641c4b3799cf3369511fb4732465693b4e96": "b9757f778c62a9ec6339881fb08653ff",
".git/objects/31/569d16770df78e90f691738bff0c143d593656": "e11d1673a95068d86398bf26b380694a",
".git/objects/31/a9efd7ee45cebf319dbe1fee431994cb7170fd": "27a225fb3e82f7186ae6cd0c5ec93988",
".git/objects/34/e90b0e03426635c93aebf0679c9937c990259f": "e8f85af62f28872564a0966003360cc3",
".git/objects/35/12d89879d3db0448de2537975b3eadbcb3d7de": "ff4898d86aa12511e5f58a73baa444af",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/3a/67ff888a00e0c73a08c4fa7aec6c2c67ed34e2": "9d7a355bddc2c47112d95c3d33077139",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/40/604921f44e0f60fd672536968f8b4941712ebe": "0187363ce3ff503b0a4638dfcf45b51b",
".git/objects/41/35cf6d458c152a523f7fa2bb8a9c4dd77c201b": "769751ace9c3b5e447a703aa29a46c5e",
".git/objects/42/d64e934b0e90552d465aef4da8e4cdea88019c": "edc05c39ffba645928050cd095a24bc5",
".git/objects/45/4f330430ad6848466a12df546833256b350512": "6ecb58d83de53706902849e30349a219",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/bcb6faa8cf42712c9f334b27bd3f8a023e75fa": "e84bfc9b3c4725f9bb61bee61ee5d662",
".git/objects/4a/77048009c23b97976f8064e2753f2722c6d15a": "67c35332dddc4c32b17e2b841c142168",
".git/objects/4b/1f844647a6eaa0ece093b95364819fbf7bba7a": "9d4aad0bbabc2744bbfcbf6192dcb27f",
".git/objects/4b/b176d18a39946fbd75216f78f14e951cc64b56": "6e1eefc765d54e154ae87bc834c2193b",
".git/objects/4c/59d861872842ea49a4ec8241ef5e197901df61": "717e362a317cef43b76be3905344cd3d",
".git/objects/4d/bd80ed81b0195e093909509659eca6fc0fde11": "4fa2e6d8c8f380be0813314c875d0191",
".git/objects/4e/4499aee212bbb1d46a477e4dafb75903271688": "e4233ee331635dc32ad82364a8cb2bca",
".git/objects/4f/37492ada739862c71ee8f7733ecc78cecf0318": "56bf5b8b475774134b242228cc0fafc9",
".git/objects/50/07eea1cb33ffca59e22d3bf96e4af998745d4b": "046fecdd2fcb500825ab361c2f341a64",
".git/objects/50/dc249f64b951628f1b9039569e4c4b5105855e": "bcacc74e90f3adcb641a88f5df7c2761",
".git/objects/51/eedde838d6579a3f816b55eab82eeea8e8d205": "7d5d0260668333f0bd2655a5f892e5c2",
".git/objects/53/553c98f6e3bdf2dd151ee94eb2a4a6539d879e": "c99fd9c5fb752fc07861c98b0ac7a589",
".git/objects/54/8e667e9b8a63f2537f15cd76cd66e7e6642f87": "e5a107928070b472c433ba31a81c473f",
".git/objects/55/99581dad31dabe617bdc3fa3e77c82e1cae7a3": "b1228de3adde23450508933020c7e5f1",
".git/objects/56/270d8e85926eacc47222713d9690fa2b3bb1fc": "5ba42a6da067c27dcf743e51cb20beec",
".git/objects/56/42fff64180d05d3b69fb5a7abf0ada9aebdddb": "a411c0b150bb7923f8cdf071f2106f01",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/deb8b28406682b5580ffdc2670f2a63f04bbbf": "5aae80c7cac702a7322f9e854428f90e",
".git/objects/5d/adf6e5399cdf87140e7a60d9f8d2e937e71e7b": "a04614259d6f35add7583ec2e8d6e4e3",
".git/objects/5d/dbbc038030e7784842ee11cc04ce92a8086cab": "db5c333f94179fac8695f12daa5adb97",
".git/objects/5f/f3e0bf57e692efffc7bdf53981e1a5e2fe056a": "290f2033e5e8aaba849c8680be4de5cc",
".git/objects/60/b25ca72cec8a9e7037700ad00bf9c6b83737b7": "89881fd758fe98e0d4fc6321de7c6620",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/c700b22e124d8fc2a7c0c79744742611cdaa95": "5c633ec7ae46e5c6e237950269bab4e2",
".git/objects/68/74df63b2eda942269c257c0b7cc52da9c86434": "4fa2b0afd4a06a3d06a9e51f5fc530c6",
".git/objects/6a/2c9d4c1f242183b5e005bc9c46343754a65982": "78809a2a2c9316ffcd81b6342cb4c1b7",
".git/objects/6f/bfad1ade1ac4e4e4aab8040ec8961a21916fa9": "01964d39b4651fbfab77f42eadab8818",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/28d9e49cf73e73e0fb5de879d04c483aeb9d45": "71be1de8cf4ffd7b7809b1123b8fa60f",
".git/objects/73/4e1ccc45704ece78e377e5bdeea412a26544cd": "7b7ead4c45db06774fa1dce234ce71b5",
".git/objects/73/c3eb805d6204d09df87632e76cc6b8ae20e3e2": "e5385c3bf747acd16836d71703c8aeba",
".git/objects/77/3f0179828d2dcb0004f3d0a79241d9eece12f6": "907030379a74c92927c34b5507eb7c6e",
".git/objects/77/df972219458543e6d001874bbff7566a25f2a7": "179de4c43aef57f3f03ab2bf4411b895",
".git/objects/79/111db4992d827d179e99530695eebab5fd5117": "bab8ba7e300b8a2156fdc788e83bf205",
".git/objects/79/d0bb098e0a55e3dc2adfad1f248c4ddce1ba16": "ce86ee58412200f3f3d707b3e78ef4f8",
".git/objects/7a/f9fb4420e3851e67c228388a491b908d08b63b": "c3fddd40d590a847ae43452253325766",
".git/objects/7c/5a07314396c138e508e07b07ca909fec12f7da": "414e7c416753c0b42ecf8dcb7c26a401",
".git/objects/7c/5c2fae3f7bfcd4f85f45b6abae33d9f20bdf27": "0bee522d957bf8a4c6b897dd684603df",
".git/objects/7c/b5edffc44c39702d13244b3e92d11b78af7587": "2cb864b3c8c95cacdfaa3e17025954ad",
".git/objects/7d/085bba948901e1f61812a5bff6082591506ca5": "73b494a798e962b4febfa8544d1b481a",
".git/objects/83/4e9ef4f68da8d9f6f683ce960545dd320d887c": "25a15b603f8bce3cf3f7712836757d0b",
".git/objects/84/95c5f9ac037b98197977c27e45ee93881e87e2": "6f71608349771f9eefa4deafe9a6021c",
".git/objects/84/b2539406cd93f9aff24809ef62223bab691581": "201a99c1052bc64c819c1b1a68f4a5c7",
".git/objects/85/99ac06cd37fc8e5a4d492e1e670787048b9eca": "d9ab494e9d86d2c8a304ea54c7fa28f6",
".git/objects/8a/a56c1771aa9e07aad4509a7274b4fb1a1cae3e": "db816259985f492de3a14379d54edbf4",
".git/objects/8a/a82701451ab2174778aa78bbcdacc816ff047c": "d808175ea8497072a504660972e4c70f",
".git/objects/8b/4327b3380767f006b514ab3afcc6f2b0b7400f": "7d8bc73f9c5c81388bf8965feba847be",
".git/objects/8c/ef0a8ea2179013317c70cdffb3ed9e7482029a": "b5190596b6d1b73d92101ee7bfcace62",
".git/objects/8e/5adaa02f22b19b3d1b73bf68b66c16d1e9514c": "c265487341721caa0a9ce352700d4c05",
".git/objects/8f/0918171e70a43e7890a7f1372c02c2ce533421": "cfed92f23cb361dfd53db059b0f6edfc",
".git/objects/90/67761c66a4113d371fc5ebf16e64bb8cf8ca5c": "63ddee2d9e00bec7b45298aec3c1933c",
".git/objects/92/fc3013c2283ccd5c4d8cd47f391d0434ddbbb5": "db000bbd38ffa675794ca937c89bc030",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/08e11a4de4443026ce30522caf65dfa18716cb": "f6afefb020029cd869dc6cd42a151294",
".git/objects/98/c10f11e0e8003c07426eda037604dfe67f1aa9": "20147db378af6001bbb5191b6471b20f",
".git/objects/99/5d1c6672f6cf7283b35df099a65e6f3a80414e": "f2167fbb5a2908abb3f44c6c8ec0f884",
".git/objects/9b/1cdf772978cb12c92a6ea64b9505d83be6e1c5": "8e71e34b34c459c040099a55d91f2e97",
".git/objects/9e/16e54e77e5e52e7e70ed4cc44f2d980387bffc": "8eaad61e882450391d1d611aa10fabdc",
".git/objects/a1/49644da31d13eaa37a6b1a494d62e483be91f6": "ec2eed14ce11756f122314698f2b388e",
".git/objects/a1/a09a56924c4b640b07d07b1a9a72b98ebca1ae": "9557c70e0dc234e1051746c977c20a71",
".git/objects/a2/93d45481117a1581c5d6efe38db5310d855cd0": "6ae361dbe148c1356e64b62f28f65d76",
".git/objects/a5/0c9f29fbdff6b9039bf917c98d1c86d8a789c5": "fc2ef5da04a4d70c3d233a92fea66207",
".git/objects/a5/57691322db24b3ee1e8b6b8f7b7187fcb9bc05": "aa8f9197a9c2efc896afa15aac06ee2a",
".git/objects/a6/6bb4585338fb96504665f02f1e4a1d48fdffd7": "8cc1ffaac6a6f360f5287d662cd48360",
".git/objects/a9/d60b814311256e508112d91046d85b32de4536": "0c7a71c80f84514b3a9544dc3a950fcd",
".git/objects/aa/3702732489a9daa6886053c8d59f066b680c08": "a64400db23f2b2803341e916d0d13876",
".git/objects/af/9e01073af6736e1024e039c41df283b27a7a9e": "43462f3d2f519e2f69107dd762e3563a",
".git/objects/b0/012adf07cb1f797f9262fedc6f513aa40c43bc": "9adaf628c15d6b021f258ad122f1f9ac",
".git/objects/b1/7db19a4b578a1a1f9d77d92087f080ae607047": "b3c2ca2a89ef302a2b11e167246cf912",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/148168ed8177105c7b57a4065e08ed1ecb2f92": "84dc221765c9207a985c3178c952c0cd",
".git/objects/b5/63ca81dd9b6097bfaebfb10cec4b8bc0026389": "107714d5f95b69a8cf4248674461e3ce",
".git/objects/bc/f590a4804ebbc13faf1679e25f6c7d8c622889": "07bf4dbb2866f5f032e6402b8092ce9d",
".git/objects/bd/6b9abf0517f907b2207d96f2bbdbfc17abeb73": "0a29983fb47cf457d2939e1112b9c508",
".git/objects/bd/a57d280a649f269a39d8466054d157da8e5e0a": "1ae02f569cb881db53114d1921bf7e23",
".git/objects/be/388bf5f96ec449e87861f68e2597376dd551e5": "1702647769310164ffcf72b36093414e",
".git/objects/c1/1ef262f5c55dd08f09f0612f96018bb0cb2d71": "16d788d87b001a7e065312eb5fa52cac",
".git/objects/c3/5b4c268c3f99f4188621eef6f6b3c5860b8087": "e9e91e47b09778dc612c756745437ba9",
".git/objects/c6/0836677b311310ea44d70205bac6bb0d00b365": "ed6161cc80d5b6cd525743bbc8e40b3d",
".git/objects/c7/c6e3561af2038c1455dd80b18cc1cef9353d3d": "a3295e0dd1e75fb5f8ffaa539406e072",
".git/objects/c9/75c476812e6912d205514868ed8a157bf0bfc4": "4eb54a234e752a74845086b6abb3bb89",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/87fdfc87a2c7a19649216b6f8b44ea396770cc": "cf3e4c71b174f7eafeab26706668c29f",
".git/objects/cf/f3cebcdab38622c0e4c8e9ef9990ace0f1b063": "c99d8004b3aa66663413cc99f2dd5cda",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d9/4b99142b374c8f5100de5c68f2630bff4c46ef": "f82bbf0dfc7bf22fc08d6cb2da7f8af8",
".git/objects/da/4f3b7912d211a5dea1b3259961dac43bab0b62": "d2b4498c2503b8f78003b6c00dba77cc",
".git/objects/da/51e12550e396842d8e733849017c114dec836c": "ba6855b1c13c5fac9f4f3fa0e6364da5",
".git/objects/db/76295a330acdbce73ed2e49c4960dd2c536d11": "624d0f3c634da58cf8b6a47284e5aaac",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dc/d76d391f38e2ea8acc87643ebda20568a93ae7": "162e32d0ec67be4cba35844352d9dc70",
".git/objects/dd/7938329b378f2df8da9b6af3d131cba5f81dcb": "f6ef747e64effa60d90ae4053f7da1c1",
".git/objects/de/b32ae2684e855ec0881f5407628f05d6423f11": "a162aad61e8d0e3d9988678ea58eb027",
".git/objects/de/e8c067a934aa5757c4b49e241ba19a9c6c8893": "52e7b215d416bb987064085e0c7d0afb",
".git/objects/de/f20633a12b628ca750f5a4a1637f196c8336cc": "6b5fd50c67bb5f15066d19f33845979b",
".git/objects/e3/3afd43473e10754779197293464292358090d0": "e08f61245169235aeb83666a6504c98e",
".git/objects/e3/e479ca3a478411872bb9417b217e773586660f": "4c0ef75c94adfccf31e112fcaa5b6937",
".git/objects/e4/e8b95f08e85edca65ef610f4a73bd8d4026d06": "13e371675c77db08256830f35470710a",
".git/objects/e7/2b9b680312a3bfc05a696c0cee57c11960cd8d": "74188f8f736a6a636bd292848d546855",
".git/objects/e8/6e66f57040b95ffb095c8f0774ddc114b1bfe3": "8a0abc353baba6122d185e34bab84d1f",
".git/objects/e9/79e2dac91f9bb79bd1837d32573eb359255ab6": "8a0e1ccf6608d76f456207b1e7d6c176",
".git/objects/ec/c49f485155ad061141e390d9feb51344dc7402": "c6fdddb5555a3e89f5984e3f5ad60b8f",
".git/objects/ed/8b446cdc289aa837e0a8979d680657a5cb299e": "134107ceba12f01624c726d3673ec8d4",
".git/objects/ed/a2a961723436c1786eca1c728706caf5475713": "22e569084db297dbe594d172bf10499a",
".git/objects/ed/e2ca4dd9463bf59cf8bb8f964bc5ac51e50579": "a6fc2e13bdc35b6493a84c8c0499184a",
".git/objects/ee/7031b0c93faff32d6c515d3889f35db739fd3b": "80bacd5946f419e859b9b2f2bb9c9ab1",
".git/objects/ef/3534177fd8a61145263693af21f00f982cfb78": "578ecbb791d60a062e842ee0b609a4ae",
".git/objects/f3/5ef778f469b1eb658e14ef80dfdf2d42268d5f": "99237eca0fc14b012c0ac0f8a734b953",
".git/objects/f3/8b0b07afd8474b0fd8cfad0c8c62abd537c8e6": "081e29ba2e74b8a49dd7477c3842ef7e",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f4/ada856e7cb723f1d146716e08bbe34afb5aaa5": "f94f78f69ffd2e46a0b6c8b2c371b814",
".git/objects/f4/f6a53d7f28cd8434896f28c26cf120272ff92e": "b790563820792c4f093e404a3f0d3ec8",
".git/objects/f6/58ee9b0695c5fc9afefc8b7db1f934b9a2cf7d": "680a008aabfd15c808386799509a9634",
".git/objects/f8/6d00e8646ffd4f57843853f145a541c8a8901b": "1a6c2cceeda854c89d52a37429d97f35",
".git/objects/fa/82b85c699048191f134a55d201960b7f4a69f1": "89f8806b5904a0d180609f5ba55d6057",
".git/objects/fd/787a81c3e608898214c09e62216eefa8f2ba90": "ffec126c6bfda0bcc1ee33fc3e64bcf3",
".git/objects/fd/cb6e180ab49f6ba2f352d1f12729786967228f": "b6b44a5c0d68a438a190ae46a9ed463f",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.idx": "2586dfd70c52cae4cb4ea18b904d4319",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.pack": "9ff9aefcd5ef0fcd8b8296528c7bf24b",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.rev": "2cf7e9fa00765ef434c3ce85f8eff9b5",
".git/objects/pack/pack-75d28f1b07d8f9ced7548f1eea64b9d60b801cec.idx": "73a6775627e4266572fbafd7a1633b13",
".git/objects/pack/pack-75d28f1b07d8f9ced7548f1eea64b9d60b801cec.pack": "e8b4b049a4d502ec682a04c04fe1ef44",
".git/objects/pack/pack-75d28f1b07d8f9ced7548f1eea64b9d60b801cec.rev": "736e5ba76d83931d129d4f33e99ba242",
".git/ORIG_HEAD": "c15ebef7069cd43e8a04e6b35adea44a",
".git/packed-refs": "1caf4e72d37fba08328ea174ee3acd29",
".git/refs/heads/main": "5ba8a4cb837cc5ed302ccde4be74a1f5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5ba8a4cb837cc5ed302ccde4be74a1f5",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "62e69736bddcb3b25cd9c7c336346ae3",
"assets/AssetManifest.bin.json": "bfccdc3414771a8f6693af02aae04f15",
"assets/AssetManifest.json": "ee349c4cd7506fd228dc6b32f5b0d067",
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
"assets/assets/images/build_performance_1.png": "7267db94343a55520774d125c1f07a6a",
"assets/assets/images/build_performance_2.png": "682f45033b09742785813c178edc1c7c",
"assets/assets/images/build_performance_3.png": "cb86a446bc8691f0d032c389e6c1216c",
"assets/assets/images/build_performance_4.png": "179a3cf7cdfa5fd422a6c067d08130b0",
"assets/assets/images/build_performance_capture.png": "8484d3d3cc1f3e42b079aff266cbc7be",
"assets/assets/images/build_performance_icon.png": "3ef42a152ff839de958124aeabfe887c",
"assets/assets/images/elementalschool_logo.png": "29d55b5d040f94b29f71ae6a2bb09d8d",
"assets/assets/images/google_play_logo.png": "f6cc83e5d4406c2ecd7565eee5ff6cb5",
"assets/assets/images/highschool_logo.png": "a1ee6f2e149de4b1f9a7fe8a4e9373a5",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/assets/images/middleschool_logo.png": "b8c2493f2b6fa706cb88b65dbe706463",
"assets/assets/images/sliding_puzzle_1.gif": "0e4aa2ef9f0551331b30d977c5a65eb0",
"assets/assets/images/sliding_puzzle_2.gif": "06a2e4eb5842b7627dec68f7ed06c6a0",
"assets/assets/images/sliding_puzzle_3.gif": "6f146a63fb3d1fae779a8f7aafcd6094",
"assets/assets/images/sliding_puzzle_4.gif": "9fc7304be2e6e04c63ec745a5bdc09a8",
"assets/assets/images/sliding_puzzle_capture_dark.png": "7db5ae9b1abb498cadce7f5bb0c04f9b",
"assets/assets/images/sliding_puzzle_capture_light.png": "2077dfa35233db158bf3dbc67ed7f1e9",
"assets/assets/images/sliding_puzzle_icon.png": "9837d1388c55f951c12fdf9ed326666b",
"assets/assets/images/usw_logo.png": "2f71901a246839d828225ffd24fa1f60",
"assets/assets/videos/sliding_puzzle_1.mp4": "e07bcf4660cd6acd882ed7c52b3260c2",
"assets/assets/videos/sliding_puzzle_2.mp4": "92e4c622612b0ae715de84a43bd7a374",
"assets/assets/videos/sliding_puzzle_3.mp4": "f28aa094cd82b280ca08e8402f6f8c30",
"assets/assets/videos/sliding_puzzle_4.mp4": "99ec2cd766ee6e0651e45631e828fd8b",
"assets/FontManifest.json": "cab0067f917c1fe5da6c67bbae551a69",
"assets/fonts/MaterialIcons-Regular.otf": "6509312c71e7a1b579b4155e68c0303b",
"assets/NOTICES": "080124e49e35fbba7e0b17a148cf13ed",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "68818d659e9357599823ac623e473011",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e1ec1950fe0783109c3b5ba5820906f2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0c369739c86c9f50c8c28e70d874f35",
"/": "a0c369739c86c9f50c8c28e70d874f35",
"main.dart.js": "009d27bc5c96b29db856b40a77bf797c",
"manifest.json": "4a42ab657293f7f8b40c8ba37d9c021b",
"README.md": "9406a41172b5a4f6ccd8a3de4b5ea6e0",
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
