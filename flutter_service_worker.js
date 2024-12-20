'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fc0786a4dff612e6f8ed6951ff7af297",
"version.json": "c49069c0f21d8e9066a96392d1020971",
"favicon.ico": "68818d659e9357599823ac623e473011",
"index.html": "c544e9acc3da0f4c776a73fd63edd3f9",
"/": "c544e9acc3da0f4c776a73fd63edd3f9",
"main.dart.js": "49a977910306c86fa3c25577987701e7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"manifest.json": "32c39daafefc5d31e84993a937bf32fa",
".git/ORIG_HEAD": "36775dfe19a8156603ea80325e839cd3",
".git/config": "ecf17fa5668791466af70c0dda67f69d",
".git/objects/61/ec348dbcfae1efa92b1e7f21a5473e495a3878": "a500cb7ea13128831cecc2473d30d6cc",
".git/objects/59/b57b131f3f14fd048147264d676b68f81c5c0b": "20a35de575bef8fbdbeaf26abc4b4a62",
".git/objects/92/a71e05dc5f70e0c88ea6e8e2225db891668f42": "3084ac54dd66c8632db3a4355847d5b6",
".git/objects/0c/f6eb5774b39e626c427a0842ff934cba66d46e": "9bd7c374958ba60374e476d48d38f588",
".git/objects/66/a74820748e63657c96a4fb32cbb9c9533006cd": "458f4f99a160b27f288c58e6e4ea0c68",
".git/objects/3e/9639eef03151ea9c22bc92653e66f6b2784104": "4f9ed21267cb2ef9aae9c14016a5208f",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/565b88dc0dbef478741a814d0f3e37ea836c3e": "e9f2e2a4e249d057b9309d7bdc2945b1",
".git/objects/57/88f01f913062fa21371b6ef82340ddb522179b": "19f706e26aa25cb899b556f2bf5137a2",
".git/objects/6f/b236e72bc1887a517efc2ea4f57f9ef7184ad5": "66d97705ac36ae2da263e804783273de",
".git/objects/9e/6ff8a621ffa728dc3e3fd7b43b4140bf82096f": "4d1ea68a6e518dd0ba3eb9b604582b19",
".git/objects/9e/902076b55a65955db8bbd6bfcb10ac0c3960b2": "b52dcdf8a95fa887fac9a0aa64346c27",
".git/objects/9e/45e5d00b5af451e5fe45e39d89eee0c9f453a7": "ae537b8ae632090ae18837776bc895ba",
".git/objects/04/2665ce301d5ca5579d5f65f513882413885b1a": "6550bc224e10a2521d52b3d4367e2a7a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/65f1e61f145a1848ef95993ecb3ac4afa9aa16": "25224deb00f30fffe7a26cc07f885b3c",
".git/objects/69/668e4abfece832f0d71d5253a0a4ea509a11b6": "ff341af48ac3b4c43a372a3605612cc4",
".git/objects/69/241ad5dd0597578f53ddc403f9f8ec1e00f8c5": "bcf20a6c916e19f6e8be80320d805bcd",
".git/objects/3c/2b80d56bf049121223e7de057c715ffda3825a": "58101d8181fe24d42431aab2dff45e8e",
".git/objects/56/d7fa3580dfa0e96cb4f882041a9a47bc23fa57": "fcc170a7c87bcab83bf7e6a38705f94c",
".git/objects/51/5189e3bc61525183c75bae9412632854ddc03e": "8da5312f205ee8da2790b4b8d3978f7f",
".git/objects/67/8a6e5c69affeb67b38a252698f77ac989c6169": "2890b63ca8859d6b1d2d56ae0d152bf7",
".git/objects/94/52ebf0b7ee5d280006185a467d034171276367": "fabadf92f8b52d6079e939fb37257b1b",
".git/objects/34/87c08e42f2610ed51f07016d65d508a02ffc9c": "27c1b904e378e4dac8b9c327bcb4864e",
".git/objects/5a/157a833f72c144e6cda4b009e03b8406976e21": "d5a29b2cfaa45cdbba479c373928afe2",
".git/objects/5f/d0b2d6f2771eedd3c4f462fb2384ee90df7661": "d8645279e4aea4adb6cf0419b6532983",
".git/objects/33/7a2651a5c544e545f2e246b08ea2d997797923": "3990eeb1449ea596f8e33d4cf8c84b36",
".git/objects/33/69c3bfcd8d74b3cd9c4c90806242ba77d6f86f": "82b71d281c0ed799386a7eb6d45328a3",
".git/objects/33/10d95888929e1d11496229e5d70a422d287307": "17761293a6e6bbc10fce7ab62c6dc5cf",
".git/objects/9c/f2a05514eeb481ab2e81314f39c85fa2a064b5": "6f0a9984aef248330d4cfb8c2cfed923",
".git/objects/a4/af1928ffd07ea08a3b8200861b288ca1ff0860": "3b56e3de1a75287beb4b8b8ac071ce09",
".git/objects/b2/6125a6f1fbf01856e5374a5b83319858565214": "464d732a670df71eb7b44ed68ddfd2bf",
".git/objects/ad/40c095abc7929adaa4aa459b95177aa35f16a0": "0235ab3a80775e4d686ed3bb0db32988",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/470c3fc76896f388e77e799c272584b5656574": "532a78d4ab2e161f2d49ed1e0ba70b52",
".git/objects/d0/2a2e914f65383fd301b9db1b1d8e2a1d626cd4": "f44dc3937a9591a71c5e35d6416cf65b",
".git/objects/b3/e95f0ca9b13331e10d6ec8d28add6898e18cde": "72a3b465b8905ded2a8d06b1034bd36e",
".git/objects/b3/4c2bb46af665a1c2b677cf2880611965510a45": "ca65df0bfd3097dfe89c8d927a21079b",
".git/objects/df/074e39e870f825f625995ff840f465afd6141f": "a4150a11b2b6d50bd8fc11dd45ae5669",
".git/objects/df/f729e3131ed9a44d8af639620eca65f3740e35": "54d55d370f00f2f153147607a76ad5f0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/9972a11162fce746df20eb6df302bbb48e3257": "4d1a6a7d6c681e1e48e330d0922538ca",
".git/objects/a2/eeb87a4199ce3019f82ad034071403b8459448": "507b915cef988e7a7147c5e6f2bfefbb",
".git/objects/d6/98255c5cc36120ef4ec16fb9f48c82c642fc98": "4d37fdb0b6b35e44374b21193f0f3b5d",
".git/objects/ae/e9535e6bf41247ccf4502995ae6581181ff75e": "c4d4d7074ab61a96f70372a2917c1c8e",
".git/objects/e5/945eed18cc65b50fd77b963f774789580c7923": "24691057e19bcced1f69ed3c54374a3c",
".git/objects/eb/050ccdcda674b769188c7786668dcaa18674df": "cf71f5220b27a87be96d3376dce0c393",
".git/objects/c0/fe6ad017260d2e2a4caf20d28e1b67f0bbf14c": "9023381ef240fe1871fb94aad78950c2",
".git/objects/c0/b6c7c015b96de74cd672766c4ab9c04ab67721": "3e51520b2737d6d244e66b6a880f1cd7",
".git/objects/ee/0f3c34eb9fac4eb77d1cb8e6cd590345891b68": "a6ef1189245c23c84778c1cc5f72d1e3",
".git/objects/fc/16e5914e45cd430dc2542d5554d53c10f9cef0": "d1947109cb605ee9ccf2f86955c41fd8",
".git/objects/f2/820647c6fee55c9dd68265834741b9c66fa03a": "c5e89b61381594fedb874903eda6ce1c",
".git/objects/f2/f9af303ad27492e82f26a05b09245d14384d58": "3df07bc36817e64dde3421e76a7274eb",
".git/objects/e4/a3f54e155dcbcb3ec633b371abd8df224f0212": "70fd6ffef3eea509d758461ab2c54ce6",
".git/objects/e4/ac812cf0569c8c02409a458a3b2750d80e2632": "40a0c0b3d1eb9099950dedbe5de7a4f6",
".git/objects/ed/edacddfd9d19239245484d1857c21d799f9854": "827ae06b6eb8ec5b1e9082a6c4a22b95",
".git/objects/ec/9227abd678e432b86bdd2d1c2abeb11db43e4c": "b8d6c207fbcc450a02298733a5ef92f2",
".git/objects/4e/bf9d0497ae79eeb4f2e511f93a935d83bda265": "3c9bbb028bb232f65aa9390ee2733908",
".git/objects/18/8b1cc4a59006a80043b0171ffdcb55def19c8b": "7e02843fe9fd87a3341dbf882e6ae8be",
".git/objects/27/f4750a50a6b6c7eebba08317a80210ae9a73ed": "99bea082ca5d1e90866432b4a354a3ec",
".git/objects/4b/bf89538d69dfadd07e3159fa156149a5b2498f": "bd3299f87de80a060a1f2483d6e76b33",
".git/objects/4b/b71b09ceac0ffa2418779beb0e88c309bfa779": "6e679c54755684ed6c7fbba5a53fae77",
".git/objects/4b/650dc3e4f4f12e3387bd305bf0e960442017ff": "ba5e6c037f9b1ee97434d3c2628a89ce",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.pack": "46508bb9d8676d80a1e92f5a677860e5",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.rev": "56312cc3bc1d86c4a705843056f0c20b",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.idx": "c8cfc6f46ff3f641e825d095b1fe1817",
".git/objects/29/9e9e514ef46a8a86d940e31f0aeb7c8c082ea8": "912d0b6bcc88d869ca2c2ee3ef7bdd32",
".git/objects/7c/ba13668e514f1f32af59ed5594a03e256e6b06": "5c804979228f022f226b4dc3e8d7eb37",
".git/objects/42/c1c5be9591bbb57d87efaa1180f430fad39a62": "875a7502d3ebe1d400b3c361db8f0046",
".git/objects/89/5b7b4ad1be5635c333d4127526c599dbad2c37": "d08f0827d58e31f09c1e1191afb47a14",
".git/objects/45/9c45116a79a463b39a4af42a6f84093cb2a736": "cb24b27ec8b226549cd63815e398fb31",
".git/objects/45/a96cb138ae7695882d050b4bfcf68fe2e95ca2": "6871301c4cbec0a4f2cf1f94f934db83",
".git/objects/1f/e943080330346734f84e03b0bbb0f85eaa66b1": "01c17e285fa334ba52368f932cdd8c4c",
".git/objects/1f/62ad3b8e01a3b9b18bce7327726ba1f8859b74": "c55cdb88fb0d2c23842ef72c57e678bc",
".git/objects/1f/57363c04eda4d1b66230129b9901e50a8c00a7": "29b431174de00903b30af723f9f13f78",
".git/objects/1f/e5dfc0f82780d212bf24501cba25a6ee8efa35": "55b312eb70ac91533b88c3a68c20027a",
".git/objects/1f/935ea8c5acec61a93ccb1f5eaf130a14581a39": "58048809446f584915f2b29fd2cf9a4f",
".git/objects/73/49df92d6db4775d524eaf83961e57702b38b9e": "171ca92cbd41258835f8292a6c8a4536",
".git/objects/80/e8bd6e5b34b89b4fc1a7669e904bb2eeca5b2a": "7b2987556083923a6a2ed89e4dacf1da",
".git/objects/74/cbf17c553c1e1d79a7d51876ec9d0eb898a215": "9bf95aeff22569e3bba7ca6caec783fe",
".git/objects/74/f680d02b59dddda09439ed8304b4ac791a3c40": "97ebbab1f08e89d18228df8b93f3758a",
".git/objects/1a/7de8f36fa0f0dd6afd4cc8f67597c146c0272d": "87d4b4a64c1e1d5f456154ec7edcca24",
".git/objects/8a/8934203c1f48c3c97899404696d147c45072cd": "2fd7773119ae1344e4103871d610cc9b",
".git/objects/4c/597ad133980e7c0fac87b9c4c90f62e713d602": "951a1661032e385988d03ff00d872470",
".git/objects/21/7ce119bd4ebc6e79f6297213daab5ea1ebb1e4": "6da955e402878379ae52728415049c5b",
".git/objects/21/44d5453560cc849253c335ca1ad6e240edd335": "7239e26e9f6db1721e1cb1046e096c22",
".git/objects/72/af1e28aa41c7271c454c6d125c93816419fa14": "da7eff1b1bb9951c486b15dd796b55cc",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/d85fdbb7d275b89c4c90675b86b543b9f24cc4": "7e578ed9e239e520d82c26633d593a21",
".git/objects/2a/97f4b03902d78a759719c1220e26663270a41f": "3fc3aa078c79a16dcbb4bc08cb323ce4",
".git/objects/2f/33eaf93f179c6000c5812d5698a8193a130157": "4305c350837daae1242423595c5943d9",
".git/objects/43/851cf46daa64892c7ddd28600fad0d81eee3a4": "5a3d4ef6926e8a15e31b680d664fee4d",
".git/objects/43/d1a89fd19fdd82771cdd2509c7950601bea350": "12fffd97b4b287844cf091e3dcab9ab1",
".git/objects/9f/1d94b1cd1afdae20ca32f725fd3da3a1fb4b34": "35c9342fb57416d9cbde3a2e63e91e82",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/5ed585ec40da959bd8cb4cc476782d29e658dd": "9fe55c4a5a34ccae399706297fb90c2b",
".git/objects/00/00a6ff92dbdda97da693a03c062fca6eba1c57": "2e37234c161cf709d0e3aad04785c438",
".git/objects/00/c8c0c4011576d6d19de3ce6ed1979f5d82edfa": "8fc4b05e031251a74a002269dd8bb5b1",
".git/objects/6e/b95941217c541671309bdc7ae976754b77f94c": "973fe47e9bc3402112ef092e6fbec2ee",
".git/objects/6e/cedebf3968257510c601096fac6a809897e792": "9881ac6f75c3f629b4bdcd45a7608d61",
".git/objects/9a/979618abc1092cfff0c4b26628fbd1d0555971": "96e979cc0866c6717c4e86b5f004480d",
".git/objects/36/853a090a98642a8cb5bd5db3a58c631e9dd5cf": "a8540a3e6499b736f31c6e0781989885",
".git/objects/5c/a6f7ec72c8007e95c78f21890faf211d86a8a0": "45a82c96fe821b6c3a0cb719853aef6a",
".git/objects/5d/a9df830d0cafff67ad129ef9e2a96db110251d": "d031e6a5397aef199e42d875d04d2af3",
".git/objects/31/84b2d7c27b77b1c8b250a4ebbcbfe0c243b3be": "650e81aa13e9262bda7183a2733789be",
".git/objects/31/e39e15caf075b70997f1c1203f1643514c2586": "025946eac010d31362aafae1fb6b354c",
".git/objects/65/d8fb12e9959befc48097627ff4ebffbdbc20d6": "3918870be309056a7de3e5b6973330fd",
".git/objects/62/8c6fa8b4aeb57918db784437777c59f1b291d8": "8199512498aa35162540e4074ed6ee4f",
".git/objects/96/b42afb73fd3167a1fe01413577e8faf8d00647": "56a890394ca8713eebf02fb76acee1d5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/98/0e275f23712fc83d9df240d9aacb19c6f27c21": "bc0cee73fc0640424ad94691e36c817e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/39768576830a0ebbd9127a79baa06e33b8619c": "96fa66cbf6accbc1ebf8405dbc4724b6",
".git/objects/53/80adadcef9a69f9ef20be6fbd779eb6557e526": "1f9c0d71f933d03b15ef0ceac4c3ae62",
".git/objects/53/4ef1f6a14314ffd993e0d637ff5703eeb2bb66": "a29b602d8518a04a5f1a54b6d9d8bf58",
".git/objects/30/f09a5b0c2e8908e50baeab07044a2b90f3e1b0": "73e6e08dd23055b1a864e1627db5b88e",
".git/objects/5e/3d5dd80157e4280448eef40c324fd45424bec5": "219b34e7265b80ed17e563bb84406d26",
".git/objects/37/86745aa09d5949cbf7c792fc964d596326b543": "8a44d30b7ddd6b57b4891ce562015c8d",
".git/objects/08/6501e947303cf283fc876d14df495c1f0f0f3d": "9a6e9203100515baf961930bdbef5c1c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/631fd76d446415016fb9161ef132bf50095c54": "85af60ad69995cd746542a352c939ff7",
".git/objects/06/147d609dfca993fc82ac316dafa8fe5dfc15b6": "ccedbffab3fc8b386fffab7c7778409d",
".git/objects/39/f647ffd0e9ecabae963e31153fdbbffce94f51": "fab7113a4836259af4b81d558c707109",
".git/objects/99/b9db4a8e3627bc8b7187a0aaf7d176b144512f": "e9fba2e79671297af604b424c59c3dad",
".git/objects/99/698080af9a935e94cc329f4a52a98e4562ae06": "0427cabe25d212e98b456c1cd40eceff",
".git/objects/55/033ffb947c2eb13ecd86af31695d82d07ecfec": "261533f2e59f8dc687142b1eae6a67cf",
".git/objects/90/3a4fa99798a7db897bbe711757a9b1cac09428": "406c3f3876548995a9af800404a103cc",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/ba/780a66ac80add12679474b0e3aabd615c34308": "049e08bcd9c16be11293bb2015269e4b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/a0cd3504294b1c46a46b0a0493f9f7988d7ef5": "03f668211977fa12bf1357f87fce8b3b",
".git/objects/a8/26e7358f05bafe38eca69f6490ca3e5b65e132": "cb62b1140e29e6e225a7bbd9e502f4ce",
".git/objects/a8/31d9e0d6a8937789fd3a5869c0d7edac1c407c": "d3fbeb2272b5467eaa3750c00c4a9a73",
".git/objects/b0/ac529e8a43e70d14a5a5e792aba0d1cb0dcac0": "26e89d0473cb719d3516d8026744605f",
".git/objects/b9/06d0f5e676ae46a3d49703e3238c1c792e624b": "090bb4a631a04e279d8499cd9aaee872",
".git/objects/a1/bc898c69d2164d3f8face33bd7ad13e294f0fc": "dfdd6c5b4cb4f8cc9a70f4d3a56700cd",
".git/objects/c3/35e57fbe7543004ec69901b46fab62bef58858": "aef4cbf83710c0d650f93334f37b265a",
".git/objects/c3/ad441350acde821b9ae62ac60c59be1053d234": "b95b5a3f1db937284d6c1fb50078b442",
".git/objects/c4/9436eed48a055040f850b1fbb5c4139b8d92d2": "20451901a3f40258b82f1e18c1057e96",
".git/objects/cc/c497a6833fea3bb1fab0f00c73b743bfc6d742": "c41d11edf47d7bea6b0ba1a9bfa8d883",
".git/objects/e6/e684006e74de26df5268ba22092a2f0f4ff0f5": "aa1afeeebec78fa07d34bdc2f9d5a9b9",
".git/objects/f7/8f1500b05e76c2ae85a9c4af90b2cceffd4fb6": "3a2ea9758c7086c00a88db9b99b236b8",
".git/objects/ff/7c0fe7dffe74758d719fb7288a3bc3ba2678d9": "426dbc93c5ec4555c4aa8accc8fe7d6d",
".git/objects/c2/af55edc19afbb7a5b710cb34242515af52bafc": "0476ff724b053075a49ee7dca336d60e",
".git/objects/e9/5515bfa5d98988a92f6473d38381e00cc8d2d6": "e3594b5bb17717735249be756abc03b5",
".git/objects/cb/1acd6717e6f96a39ed7ff1eb71f01b37c3b03c": "d662c1aa85be1df490de8d03f515f20c",
".git/objects/f8/717a57ad3f0116ca0ba44371a21cea3b000ff4": "3598cdbef457ee399a232ca2b9c3c5e5",
".git/objects/f8/e4f6e67cbdab33c4a6fdeb9689f8e0b873aee5": "cea8f045e05b813a2499acbea7bf18b9",
".git/objects/e0/b817c3f89e48850778212f66527918c16b75fb": "d50aa8dc0033ff79c69d080ce302c067",
".git/objects/79/8e6d9deeb67b57f97e9dd27789e8ada2fa316c": "4a9332b3298a66de5e104f047456834f",
".git/objects/2d/3562826a0d1b87670160e5bf0808ce514c8dc8": "904b7fb7900faa351d5cae3f71a23b58",
".git/objects/83/f73c85fc46367239bca7daff5332fab43a4c78": "14c2e7bf2d9616af04e394ba35a61311",
".git/objects/83/87baecf2088a830b6e15d4e2ffc060a7449040": "9d087f3629729331c65e1627afd7614e",
".git/objects/83/c4422a5e66afa40eada025031804acad230d90": "d1e42d26a5d2c1d1f6ecbca84ceb68e9",
".git/objects/83/f253f2c056a96dc601d62624d4341f56f6f3f6": "acc3bfe22b43c9d1185a790998dbadbc",
".git/objects/1b/4e856fcc4b94a202f230acba29d2a20dd5d522": "7a3e845a0613a2e0e7739ef8f50b925c",
".git/objects/77/e647f6a9eb1d82d11d44fdbd631a9ef19b94f1": "1303df36593e7c4bee679ff087949487",
".git/objects/77/dd4f0564bd869bb39e8edcca0b9b60084fad0d": "abaaf018544ddc9c4adfec38954d9a11",
".git/objects/48/aa74fbb450ab661d5512df2260ea6a61c3bb17": "f3edf25ca22a542b0d616906677c2610",
".git/objects/48/bfffceaf8fa880735f48df99e3f7b196aacb2c": "2c2ff8bb5217a9ccb9a642a5243a9812",
".git/objects/70/a0cc6a939d11288d52d65817850403a62b2544": "37ee399a75a8a162bd0815104a66afab",
".git/objects/70/ba2c75e2999321b5f7490ffb324a018fa0228c": "3b3ecaf44193c99158776984dff9a1bd",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/9fa8ff9bb611f100c31a21071ae0368ebf0943": "80962c90700683a4d71f21b1244acfc2",
".git/objects/24/6348feabf647ad068a85523054c560ace7a92c": "ef92fac57b5445f99eef3b5f7224a4a4",
".git/objects/24/e52c6e6b7de163b6405741ab1a5cb00dea3fe9": "9b5ff0ef4debb04ce50d9c527b9245cb",
".git/objects/15/d8e4967cc7b5fbb679b124504875d0578c916d": "d649ddefeac3bd7be72802c3d501c92e",
".git/objects/8c/5d3fc8de7092fe030f93fdd518f76743ef3e43": "f4d5500930374a5fa5441871e0bc4cbb",
".git/objects/71/5b179d2d5d325fe41d01eaa526bf29fbdd574b": "8c5c0802a4a35d898e17a2deddda7b9a",
".git/objects/71/d3c9717b738f850d0d7a42ef27120f6a8f4b6e": "5080b3f31e5f3d85992fac2d634b11f5",
".git/objects/49/82baa86e0dc63816fcef1d091f0eb62b566050": "73f7291bd6e7de5976c47eed103dbdb5",
".git/objects/49/40f8ee533d2d827fa4dd5766100714d648a403": "9b2b152935aca520282a8d1e42b93792",
".git/objects/49/c21276633991ceee06c926a9741ddefb3845da": "ce2d130e2efdea1bf08ad064df57cdcd",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/d3506ddd5f21750951cf5a85f09ac11e49c00f": "5610908cd74ed56fa4869cbbd9f8de1f",
".git/objects/47/926fa6d6bf5f15be025b8c00bc6176c45c3e1a": "4d5d2f1ed52483266363b8696f04bcb2",
".git/objects/47/9bc57199128d124c2339c6d0744502fbe587a9": "5d02b9ce172e24656d04c755ae65f4d1",
".git/objects/78/d33c9f432160156cd48654769d1d4105ffd75a": "35f3f27ada21bf26fb640d3c8eb7cf6d",
".git/objects/7a/1c3d14ee710c31b2f023fd3d0a8337d45275a3": "334077c023182598578fcac9908520aa",
".git/objects/7a/b50da540c4fe0cd6e27457af60233e1aed7f30": "87345f5731f03d95b3d3284a69504f78",
".git/objects/7a/34d8954b30ddfee26668d46a47d82d365ad091": "3b2d6e02af83048a39cd668e4f84d903",
".git/objects/22/ee18b05f676e96ab689b4349ecd5b0074be557": "2903a5e22a174124d42df4ec4dfd21d2",
".git/objects/22/38f549d6278b4e018f67f2d77d3f958670abc1": "3656157867de25d0f5072d1d76b448ac",
".git/objects/25/27230a81e9751bccb72bd9e0aba585fd803197": "85a924a74a8c5fea87decb40cc3dab71",
".git/objects/25/2bb0378c5230880660d19fbabfb12806d5c40f": "7c15739e7ad063cd422c0feb8df47a30",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "720a317e1290151a166bf014bf920079",
".git/logs/refs/heads/main": "a199b8f3532302cc07b9732faa5e41d3",
".git/logs/refs/remotes/origin/HEAD": "446e04f0ecb34daefaf6f4c29542611c",
".git/logs/refs/remotes/origin/main": "54530138412f32c3dad9539a1473710b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "51f6bdc614337fb308631689727f843d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "51f6bdc614337fb308631689727f843d",
".git/index": "ff4fb7cdcc1956a6ab97b3b9bca6a612",
".git/packed-refs": "e6e834f7253a8e20078c72076288bcb8",
".git/COMMIT_EDITMSG": "9a28e40d58938998efd96015ac8d80fc",
".git/FETCH_HEAD": "e06aadc3955d61110e2bec3d20f6b0fa",
"assets/AssetManifest.json": "df8236e66373323a62efac821a1cb78b",
"assets/NOTICES": "83b7b17021f537f10b30e8e7119f68ab",
"assets/FontManifest.json": "58d70fde181afd2373004507271659bb",
"assets/AssetManifest.bin.json": "dc2600815c37bc184421dbb4a9c5d5a7",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6d1f22abfffe030feb814e20c19dae93",
"assets/fonts/MaterialIcons-Regular.otf": "bc77ba3d4d8202c199fa26c9ea69eadf",
"assets/assets/images/js_icon.svg": "75a2cc3393300119a5446751dd63c0ab",
"assets/assets/images/parking_app_2.jpeg": "a0f2c806027663494f3c0a68e1a34bb3",
"assets/assets/images/about_error_image.png": "d2fb477a0c59e992b975d4ef8017a925",
"assets/assets/images/java_icon.svg": "c690b7a95b5da03fab6d0caefae16ccd",
"assets/assets/images/clap_icon.png": "26865ce82e4cd0d544614c602907bcff",
"assets/assets/images/clap_login.png": "e0161c2e889f70a6d03b048203424cf4",
"assets/assets/images/clap_add_location_2.png": "36cfa27b7a0f6b1fd0a6426d3bd03fea",
"assets/assets/images/clap_login_github.png": "1703e923aaf8e662796f8d5cd761e28e",
"assets/assets/images/clap_friend.png": "29ddc3d520e7c0693fe40c322d69fb25",
"assets/assets/images/mysql_icon.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/images/parking_app_3.jpeg": "8170a55dfe955db6c83fb05e2da3d6c1",
"assets/assets/images/clap_add_location_1.png": "7bf93f622189ee48dc29c15c196effea",
"assets/assets/images/tensorflow_icon.svg": "d770560dee47fdbf62ffcfccb1d95f34",
"assets/assets/images/python_icon.svg": "4fa5adc39ab2d2c2cd5ef1ca102e7176",
"assets/assets/images/artc_validator_4.jpg": "4080ebcd0da817d3f867369aae3dd949",
"assets/assets/images/clap_capture_1.png": "5ce2dccd653f497dd9377b9298b677ad",
"assets/assets/images/artc_validator_capture_light.jpg": "cf5087875f96e93b7c80dc6d7091b22a",
"assets/assets/images/artc_validator_5.jpg": "056daa5569eaeb41072b9a69333497eb",
"assets/assets/images/mariadb_icon.svg": "1a932bef3e3d634365a2e7e24d09fbb2",
"assets/assets/images/gitlab_icon.svg": "ca1cbf0872fc8042946d12524203dc2e",
"assets/assets/images/clap_capture_2.png": "8cd4e0bccb1a03c5eedc936afc85d324",
"assets/assets/images/parking_app_4.jpeg": "512b656ceeafe9f221b6832e26ed852c",
"assets/assets/images/clap_capture_3.png": "ee1cb2bcbea81a2d388d6c9f35ba49a3",
"assets/assets/images/bloc_icon.svg": "27d733ca50820f24f12bf2be4360da3c",
"assets/assets/images/firebase_icon.svg": "a866e2dd1056834ab7e78656dcaf4a1f",
"assets/assets/images/artc_validator_2.jpg": "bb1a4a4259839b5ed1455b06cfe3e865",
"assets/assets/images/dart_icon.svg": "cd3aad8a4aaee8f14b0512b941cad6f1",
"assets/assets/images/parking_app_5.jpeg": "1047996aa013b99fe8b3355e6d4e36ed",
"assets/assets/images/artc_validator_3.jpg": "7ee40ae244d8995cd9ac60b68563b557",
"assets/assets/images/artc_validator_1.jpg": "b56296564dbcb7add31838b5a7b4e4d9",
"assets/assets/images/clap_capture_4.png": "f517d376fb8ead10e052d5d387c52584",
"assets/assets/images/usw_logo.png": "2f71901a246839d828225ffd24fa1f60",
"assets/assets/images/parking_app_icon.png": "ab6ef022a9e76ca304fddeac4371b5e9",
"assets/assets/images/oracle_icon.svg": "6ad0eec06ed93615a81b0e7ad12db113",
"assets/assets/images/clap_home.png": "76209c8c2557af215927777107eb6078",
"assets/assets/images/css_icon.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/images/bootstrap_icon.svg": "96b594ff3490bd194221be5fbd6611ea",
"assets/assets/images/clap_add_3.png": "02ab35df914bced10fb3e71c6c71ac65",
"assets/assets/images/clap_add_2.png": "a51af3993dfab6d70bce48abd7666d22",
"assets/assets/images/github_icon.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/images/clap_add_image.png": "f720adcc6a8ef8164f06b682b242d9de",
"assets/assets/images/parking_app_6.jpeg": "d9bf0e1f14b6c1600a2371819fd58bdf",
"assets/assets/images/clap_detail.png": "a456aa1ab7667f581f0e825a00b401d4",
"assets/assets/images/clap_add_1.png": "c7a1dab40edb1ffae2345fb98f9d3275",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/assets/images/html_icon.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/images/clap_login_google.png": "c1928ca20817f54097f875fbaa0fe3c8",
"assets/assets/images/clap_add_friends.png": "fcd99132dd34b5a10d7810eb3e3f57a1",
"assets/assets/images/clap_home_drawer.png": "e84c16d9caf42120309dcf28b3349d08",
"assets/assets/images/clap_add_daterange.png": "b4245f40233e3ce156f0dcb73e1b73c5",
"assets/assets/images/spring_icon.svg": "300de6f54cb19b1d6d488faf23841369",
"assets/assets/images/clap_setting.png": "9b92ec5da83f1bd3ee9a3bc9688c6aac",
"assets/assets/images/graphql_icon.svg": "610191bfe8d82441112b192575fc82b8",
"assets/assets/images/build_performance_icon.png": "3ef42a152ff839de958124aeabfe887c",
"assets/assets/images/sliding_puzzle_icon.png": "9837d1388c55f951c12fdf9ed326666b",
"assets/assets/images/build_performance_2.png": "682f45033b09742785813c178edc1c7c",
"assets/assets/images/django_icon.svg": "da233e2d2eb2fa886848d04ef1665456",
"assets/assets/images/google_play_logo.png": "f6cc83e5d4406c2ecd7565eee5ff6cb5",
"assets/assets/images/highschool_logo.png": "a1ee6f2e149de4b1f9a7fe8a4e9373a5",
"assets/assets/images/elementalschool_logo.png": "29d55b5d040f94b29f71ae6a2bb09d8d",
"assets/assets/images/sliding_puzzle_1.gif": "0e4aa2ef9f0551331b30d977c5a65eb0",
"assets/assets/images/slack_icon.svg": "48a3232b44d5ac5cc40f44ae6941373d",
"assets/assets/images/artc_validator_icon.png": "dafc7706faaa8d178f1923a3f3fcbe55",
"assets/assets/images/build_performance_3.png": "cb86a446bc8691f0d032c389e6c1216c",
"assets/assets/images/clap_add_time.png": "79c8677f159929674c5122702fbe7d42",
"assets/assets/images/sliding_puzzle_capture_dark.png": "7db5ae9b1abb498cadce7f5bb0c04f9b",
"assets/assets/images/build_performance_1.png": "7267db94343a55520774d125c1f07a6a",
"assets/assets/images/sliding_puzzle_3.gif": "6f146a63fb3d1fae779a8f7aafcd6094",
"assets/assets/images/opencv_icon.svg": "c229ba5dd070b2027bf2a062112577d6",
"assets/assets/images/middleschool_logo.png": "b8c2493f2b6fa706cb88b65dbe706463",
"assets/assets/images/build_performance_capture.png": "8484d3d3cc1f3e42b079aff266cbc7be",
"assets/assets/images/pyqt_icon.png": "9f91d532414f299139c3954d31af0281",
"assets/assets/images/sliding_puzzle_2.gif": "06a2e4eb5842b7627dec68f7ed06c6a0",
"assets/assets/images/build_performance_4.png": "179a3cf7cdfa5fd422a6c067d08130b0",
"assets/assets/images/clap_home_holiday.png": "ce9d3e6e3096062eb9d3fda42abb2891",
"assets/assets/images/sliding_puzzle_capture_light.png": "2077dfa35233db158bf3dbc67ed7f1e9",
"assets/assets/images/artc_validator_capture_dark.jpg": "597e05f33fa1702604ac53252d134dfb",
"assets/assets/images/parking_app_1.jpeg": "079bce1593545f6782dcaa1953837c80",
"assets/assets/images/flutter_icon.svg": "b696f912b6c75845665692210772405b",
"assets/assets/images/sliding_puzzle_4.gif": "9fc7304be2e6e04c63ec745a5bdc09a8",
"assets/assets/videos/sliding_puzzle_3.mp4": "f28aa094cd82b280ca08e8402f6f8c30",
"assets/assets/videos/sliding_puzzle_2.mp4": "92e4c622612b0ae715de84a43bd7a374",
"assets/assets/videos/sliding_puzzle_1.mp4": "e07bcf4660cd6acd882ed7c52b3260c2",
"assets/assets/videos/sliding_puzzle_4.mp4": "99ec2cd766ee6e0651e45631e828fd8b",
"assets/assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf": "bfeaaa729391fa9dfdfb3ae36cf5429b",
"assets/assets/fonts/Urbanist/Urbanist-Italic-VariableFont_wght.ttf": "4a875201edd86825f213e268124d301e",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-ExtraLight.ttf": "56f557fcebda83baa33cd8e0622102d6",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Regular.ttf": "21d164e86f5cdb0161376ffbd601f339",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-SemiBold.ttf": "789f4447e6632a560edd1467a018552a",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Medium.ttf": "2424a629f9970a11ed29f68d96f1b75e",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Light.ttf": "42871cceaf1dba424ae957424dfb016d",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Thin.ttf": "c049c4ce676269a9af04992ff383756d",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Bold.ttf": "c62fa10d33ac6811e5c9c15ca821b35a",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a67f4df02f4d73bb8bfd5bff421e4d1f",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "75c4176c64611f32faf01a5de7631877",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"assets/assets/fonts/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
