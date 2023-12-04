## [1.0.7](https://github.com/pdanpdan/vue-repl/compare/v1.0.6...v1.0.7) (2023-12-04)


### Features

* **editor:** save all files when changing from manual save to auto save ([d841cff](https://github.com/pdanpdan/vue-repl/commit/d841cff8b16600425ebd889b292dc58cb124405e))



## [1.0.6](https://github.com/pdanpdan/vue-repl/compare/v1.0.5...v1.0.6) (2023-12-04)


### Bug Fixes

* **editor:** guard for existance of editor instance in watchers ([13a3def](https://github.com/pdanpdan/vue-repl/commit/13a3def38f67c13b27da62477ef012e72c6641d9))


### Features

* **CodeMirror:** load highlighter for sass and md ([5f46fcb](https://github.com/pdanpdan/vue-repl/commit/5f46fcba071053bfd4f20491d97a3398b2924624))



## [1.0.5](https://github.com/pdanpdan/vue-repl/compare/v1.0.4...v1.0.5) (2023-12-04)


### Bug Fixes

* **editor:** pass language mode to editors ([75a29d8](https://github.com/pdanpdan/vue-repl/commit/75a29d826914fac54c38b33975e0955d360d2633))
* **FileSelector:** fix position of changed file marker ([a229f55](https://github.com/pdanpdan/vue-repl/commit/a229f557bdee72e9fd229799ce40720b9a581f05))
* **layout:** fix output/code label with layoutReverse; fix CodeMirror not showing content when starting with preview (mobile) ([6327b15](https://github.com/pdanpdan/vue-repl/commit/6327b158079cedc5de252093b1e4aadb29bd28a2))


### Features

* **editor:** major refactor for autoSave ([20e1340](https://github.com/pdanpdan/vue-repl/commit/20e1340fb51d684765f5d16efa1b98e583332658))
* **llayout:** usee 10dvh for height with fallback to 100vh ([37a9455](https://github.com/pdanpdan/vue-repl/commit/37a94556310d4964d3ef63667818d9b6ada1d8b2))



## [1.0.4](https://github.com/pdanpdan/vue-repl/compare/v1.0.3...v1.0.4) (2023-12-03)


### Bug Fixes

* **editor:** make sure save is triggered when autosave is turned on ([1901a0c](https://github.com/pdanpdan/vue-repl/commit/1901a0c43a54e610cfedff34cbfa0148338ba50b))



## [1.0.3](https://github.com/pdanpdan/vue-repl/compare/v1.0.2...v1.0.3) (2023-12-03)


### Bug Fixes

* **editor:** fix not reactive autosave ([93dde86](https://github.com/pdanpdan/vue-repl/commit/93dde86024b3ef82802dfca99d8576bd1056949c))



## [1.0.2](https://github.com/pdanpdan/vue-repl/compare/v1.0.1...v1.0.2) (2023-12-03)


### Bug Fixes

* **codemirror:** debounce change event to prevent locking the editor ([7ef9887](https://github.com/pdanpdan/vue-repl/commit/7ef98874f05195b3537264eee34ebf683dceecee))



## [1.0.1](https://github.com/pdanpdan/vue-repl/compare/v1.0.0...v1.0.1) (2023-12-03)



# [1.0.0](https://github.com/pdanpdan/vue-repl/compare/f8bb46f969860539e3105ff56d092f0184a70eba...v1.0.0) (2023-12-03)


### Bug Fixes

* actually fix editor type lol ([95ab2ab](https://github.com/pdanpdan/vue-repl/commit/95ab2abc29b01a565ba7bc25ef293f1434db5ef6))
* add ts and json mode ([#37](https://github.com/pdanpdan/vue-repl/issues/37)) ([0e467af](https://github.com/pdanpdan/vue-repl/commit/0e467afbb52c759fdad0a2bfc263812b0df285c5))
* adding file using enter emits error ([#23](https://github.com/pdanpdan/vue-repl/issues/23)) ([918de7f](https://github.com/pdanpdan/vue-repl/commit/918de7f3646a24db083e54301d6ac5c3a970c0df))
* also generate render function if inline mode is disabled ([9a325bb](https://github.com/pdanpdan/vue-repl/commit/9a325bbf66b61403cd4df5ace31d0e7e1532fddf))
* also reset import map when resetting to defauilt vue version ([5e89f07](https://github.com/pdanpdan/vue-repl/commit/5e89f074ea5d33b301e079c5f4fe7860e1e5ca82))
* apply TS transform to template when inine is disabled ([ec2ae81](https://github.com/pdanpdan/vue-repl/commit/ec2ae811bd25da4be74b9df3bb8fcf9ba5d34cfb))
* avoid including vue in import map if using default URLs ([37ce32b](https://github.com/pdanpdan/vue-repl/commit/37ce32b107864332eeebbc406a817d78ae8d982a))
* avoid reloading the iframe when switching output tabs ([20bde55](https://github.com/pdanpdan/vue-repl/commit/20bde550e481c0a9c9218f8a583eae7b27ca42d2))
* avoid using native crypto ([c22e216](https://github.com/pdanpdan/vue-repl/commit/c22e216b1c6d8bbce3cbb4376d82ce15ce149433)), closes [#25](https://github.com/pdanpdan/vue-repl/issues/25)
* cannot get ts module in prod env ([0cc220d](https://github.com/pdanpdan/vue-repl/commit/0cc220d7efaafaaa3b8af07c34fd27c7825caa8b))
* cdn file models were accidentally disposed ([4301d86](https://github.com/pdanpdan/vue-repl/commit/4301d8659ad84d9c6b66d63f1567cf31119eb9f4))
* change message toggle position ([#120](https://github.com/pdanpdan/vue-repl/issues/120)) ([3f7e090](https://github.com/pdanpdan/vue-repl/commit/3f7e090c143ca0a40b0bff1d13f2db3e6964b17a))
* compile error when no script ([#38](https://github.com/pdanpdan/vue-repl/issues/38)) ([6b9b7bc](https://github.com/pdanpdan/vue-repl/commit/6b9b7bc9ea3f89772eaf1807e3b7478d39f3ef9c))
* console logging for component instance proxies ([#62](https://github.com/pdanpdan/vue-repl/issues/62)) ([bb0e143](https://github.com/pdanpdan/vue-repl/commit/bb0e1430bff586b5505c3e9d11e8331359ee23d2))
* css double # ([#14](https://github.com/pdanpdan/vue-repl/issues/14)) ([8bcf7f0](https://github.com/pdanpdan/vue-repl/commit/8bcf7f0f22553214f7936863de3d9780272781b0))
* css update in ssr mode ([3b7e511](https://github.com/pdanpdan/vue-repl/commit/3b7e51126dd32e4ebf36b9bd492f1c117ac9de69)), closes [#91](https://github.com/pdanpdan/vue-repl/issues/91) [#92](https://github.com/pdanpdan/vue-repl/issues/92)
* default main file path ([c0184da](https://github.com/pdanpdan/vue-repl/commit/c0184da073456706c44cc5e78e2d3283f4d3fe0f))
* disable pug and script setup codeLens ([1c6e646](https://github.com/pdanpdan/vue-repl/commit/1c6e6464bea009b279fe43ed401e722230bf95bd))
* do not start compiling until sfc options are set ([b6f86d9](https://github.com/pdanpdan/vue-repl/commit/b6f86d920d22d83fde3bb77b11e8f44fff1a244d))
* don't delete dts models ([d04a1ed](https://github.com/pdanpdan/vue-repl/commit/d04a1ed01a9f5aaeafc6845d6165dcc9b45b7a04))
* don't dispose in-memory files ([5f543da](https://github.com/pdanpdan/vue-repl/commit/5f543da6815e30c76dc3a595b993a380043af54b))
* don't set editor value if not changed ([bd59eef](https://github.com/pdanpdan/vue-repl/commit/bd59eefb1d2731179f772ab118ee642f453fa5d2)), closes [#147](https://github.com/pdanpdan/vue-repl/issues/147)
* ensure imported editor can be passed as prop without type error ([414b0e6](https://github.com/pdanpdan/vue-repl/commit/414b0e6cb729234ccb188332b22c184e44f162e0))
* f@ck ([0aa0a24](https://github.com/pdanpdan/vue-repl/commit/0aa0a24e9c196d846827623b48b5eace0b8498a0))
* filename index auto-increment ([#133](https://github.com/pdanpdan/vue-repl/issues/133)) ([4f55810](https://github.com/pdanpdan/vue-repl/commit/4f55810f729fc61e22eafa7ea69afe79bcfe1cb6))
* fix html initialization in ssr mode ([152f2fa](https://github.com/pdanpdan/vue-repl/commit/152f2fad88fa87fb617a8a69ff8f9f2c1b1eba33))
* fix legacy domain in import maps ([7e7c7f9](https://github.com/pdanpdan/vue-repl/commit/7e7c7f9dd62995f2f27448e72effb4c8fe879d72))
* fix module instantiation order ([879f084](https://github.com/pdanpdan/vue-repl/commit/879f08495c061afa11e058a3e059365fe09277c6))
* Fix reason.message not existing case ([#54](https://github.com/pdanpdan/vue-repl/issues/54)) ([2508030](https://github.com/pdanpdan/vue-repl/commit/2508030241504d750a3226eb9a70fddd45d3299d))
* fix rewriteDefault TS edge case ([d277d7f](https://github.com/pdanpdan/vue-repl/commit/d277d7f50113c45b8ae71afcda9aa369c64fba32))
* fix setFiles with multi files cross imports ([424e00d](https://github.com/pdanpdan/vue-repl/commit/424e00d2ac50636b3a2a9739620435b156f1a94a))
* force app name ([18863af](https://github.com/pdanpdan/vue-repl/commit/18863af803922f3966a80922db7c8a45a0cdd78d))
* handle main file src prefix when setting files + avoid infinite loop due to state.error push ([743b731](https://github.com/pdanpdan/vue-repl/commit/743b73121dbd63f164a013c8ba722d0a8bfe5ebd))
* ignore polyfill error in Safari ([39f4ab1](https://github.com/pdanpdan/vue-repl/commit/39f4ab1956af85383e6616eafec3efc616313d28))
* improve code gen when using cssVars in SSR ([#85](https://github.com/pdanpdan/vue-repl/issues/85)) ([7e2bcc8](https://github.com/pdanpdan/vue-repl/commit/7e2bcc864360e302d8b2a48e6904b7ec6c099f3f))
* improve code with optional chain ([#72](https://github.com/pdanpdan/vue-repl/issues/72)) ([b8caeae](https://github.com/pdanpdan/vue-repl/commit/b8caeaef0368609fa3c41e992304d21d526de08c))
* improve new filename logic ([9647666](https://github.com/pdanpdan/vue-repl/commit/9647666554407b32f16b8b5581333542769a5ea0))
* larger font size ([#100](https://github.com/pdanpdan/vue-repl/issues/100)) ([a1a3fe1](https://github.com/pdanpdan/vue-repl/commit/a1a3fe1294cf0daa89e30902d607addbdd525b6e))
* make main repl styles lower specificity for easier override ([fbfaa44](https://github.com/pdanpdan/vue-repl/commit/fbfaa4495c9bbf3ab936bec27445c52c9521b67e))
* make monaco editor works normally ([f538199](https://github.com/pdanpdan/vue-repl/commit/f538199e5cd99c380b3b5468cc660d47a6910783))
* make reloadLanguageTools optional ([5ab1a2d](https://github.com/pdanpdan/vue-repl/commit/5ab1a2d149820ecb737c3bc97581a87f3adc83d7))
* minor fix ([aacba06](https://github.com/pdanpdan/vue-repl/commit/aacba0673414b759377e3cbfa764bff82d64f857))
* **monaco:** enable `fixedOverflowWidgets` option ([#110](https://github.com/pdanpdan/vue-repl/issues/110)) ([c7ddf12](https://github.com/pdanpdan/vue-repl/commit/c7ddf12f25b23675c12c2760297c7d7d37668943))
* multiple style tags ([#116](https://github.com/pdanpdan/vue-repl/issues/116)) ([f0f5512](https://github.com/pdanpdan/vue-repl/commit/f0f5512f49832321a6c96631025927635a834d9a))
* new sfc file template ([79643d7](https://github.com/pdanpdan/vue-repl/commit/79643d71a5eabd7e7c9c092e8501cc07f9ee5136))
* prevent opening new tab for a tags with javascript href ([#94](https://github.com/pdanpdan/vue-repl/issues/94)) ([64906a5](https://github.com/pdanpdan/vue-repl/commit/64906a529cc48869791e663ba6d203baed236f6f))
* process all files when dynamic import ([#60](https://github.com/pdanpdan/vue-repl/issues/60)) ([7049ae0](https://github.com/pdanpdan/vue-repl/commit/7049ae006f8687d2dafce38b7f54d7281410062a))
* remove postinstall ([8167272](https://github.com/pdanpdan/vue-repl/commit/816727232d0adac0c0955c1d6bee9d7be7f70d61))
* remove preinstall ([8e41043](https://github.com/pdanpdan/vue-repl/commit/8e410433eb46b45845c39aca8ad2895c3fabae12)), closes [/github.com/vuejs/repl/commit/569fe6275db45a420850cac9419b4614a51a360e#r123111912](https://github.com//github.com/vuejs/repl/commit/569fe6275db45a420850cac9419b4614a51a360e/issues/r123111912)
* replace NODE_ENV ([863f8f3](https://github.com/pdanpdan/vue-repl/commit/863f8f39d36d25240388a9c5bc68eff0ea7e7856))
* reset sandbox when changing files for safari compat ([68a6197](https://github.com/pdanpdan/vue-repl/commit/68a6197bbfb88dc74ec317ae50e3f686cbfeb081)), closes [vuejs/docs#1973](https://github.com/vuejs/docs/issues/1973)
* respect value from monaco editor props ([49fdc71](https://github.com/pdanpdan/vue-repl/commit/49fdc7161ec91fed617043aca0b751858a10289e)), closes [#145](https://github.com/pdanpdan/vue-repl/issues/145)
* set page height ([ee814e7](https://github.com/pdanpdan/vue-repl/commit/ee814e7313162f19d45dcff7a3ecabedfdf081d5)), closes [#112](https://github.com/pdanpdan/vue-repl/issues/112)
* small screen error msg covered code button ([#18](https://github.com/pdanpdan/vue-repl/issues/18)) ([02da79d](https://github.com/pdanpdan/vue-repl/commit/02da79d0a238b8777fcd95675c8c5dbd1b626fd4))
* split monaco out ([fd0b06a](https://github.com/pdanpdan/vue-repl/commit/fd0b06af78e25632ee4fd6525ae5c90ef2c51f0b))
* strip src prefix on dialog ([d29d1de](https://github.com/pdanpdan/vue-repl/commit/d29d1de3f31930005dfc0b29f7d8a0435c0f94a4))
* styles ([6aee9cf](https://github.com/pdanpdan/vue-repl/commit/6aee9cfa7df19de0f60f0d9fe2ccbd2291998cbb))
* toggler should be absolute ([f8bb46f](https://github.com/pdanpdan/vue-repl/commit/f8bb46f969860539e3105ff56d092f0184a70eba))
* **types:** fix editor generated dts ([e5705df](https://github.com/pdanpdan/vue-repl/commit/e5705df7d1ea4a44d9f6eba4443e28712631053a))
* **types:** fix editor prop types ([828f202](https://github.com/pdanpdan/vue-repl/commit/828f2027ff3986a029de3833f521525c7ac3e1d7))
* **types:** make sfc options partial ([9916f28](https://github.com/pdanpdan/vue-repl/commit/9916f2862b327891604f3282fedf626759694e2c))
* update exports and types ([e4988b0](https://github.com/pdanpdan/vue-repl/commit/e4988b0a9ddbc9888e481fd8f1c000b1756a5ba5))
* update import map when setting vue versions ([15cc696](https://github.com/pdanpdan/vue-repl/commit/15cc696054b49fe5ea6879b9492b96cca611c945))
* use dev version of compiler ([#132](https://github.com/pdanpdan/vue-repl/issues/132)) ([bfc3522](https://github.com/pdanpdan/vue-repl/commit/bfc3522422926b0e3f18c1368111066cf268e206))
* use monaco-volar ([9846c8e](https://github.com/pdanpdan/vue-repl/commit/9846c8e67720c2d7402d52bc1c2106a9a1b28c08))
* use worker ([e1e80b9](https://github.com/pdanpdan/vue-repl/commit/e1e80b9e40805bd541ccd80d48b01228378bf2c7))
* warn versions that do not support in browser SSR ([01cb5b2](https://github.com/pdanpdan/vue-repl/commit/01cb5b20cd15c3dcbe9f1b6d3dbc8797702924e9))
* worker plugins for vite 5 ([6e66250](https://github.com/pdanpdan/vue-repl/commit/6e6625084d0c9ba8c24915ebd1060b7421e0de5b))


### Features

* add `reload` function ([#103](https://github.com/pdanpdan/vue-repl/issues/103)) ([12ebcea](https://github.com/pdanpdan/vue-repl/commit/12ebceab49c2a56702fffdfc01bb8b0bc3a708ca))
* add `sublime` keymap ([#45](https://github.com/pdanpdan/vue-repl/issues/45)) ([29263d8](https://github.com/pdanpdan/vue-repl/commit/29263d83d2d28e2ea3fc85c59de6d6d7ef92cca6))
* add default height for Repl component ([#109](https://github.com/pdanpdan/vue-repl/issues/109)) ([d9673eb](https://github.com/pdanpdan/vue-repl/commit/d9673eb4c7a3e20ca7d0f1e152d177c6c1f8956d))
* add error toggle ([#98](https://github.com/pdanpdan/vue-repl/issues/98)) ([51819cc](https://github.com/pdanpdan/vue-repl/commit/51819ccd3adcd40c189bd216f635ca6f62c4bc56))
* add file renaming ([#63](https://github.com/pdanpdan/vue-repl/issues/63)) ([eb41c3a](https://github.com/pdanpdan/vue-repl/commit/eb41c3a180eb720ba0959ba2da8064442f1b25e6))
* add hidden file ([#17](https://github.com/pdanpdan/vue-repl/issues/17)) ([35b6f1a](https://github.com/pdanpdan/vue-repl/commit/35b6f1a38611e31b9adbe7540d789be144e33bdc))
* add layout reverse api [#162](https://github.com/pdanpdan/vue-repl/issues/162) ([#163](https://github.com/pdanpdan/vue-repl/issues/163)) ([c1cd77a](https://github.com/pdanpdan/vue-repl/commit/c1cd77a913b050e2fb3d921d4dcd86a1db74b8b1))
* add ls ([a7bffd6](https://github.com/pdanpdan/vue-repl/commit/a7bffd64c43e8ff375f1e59b62c78ca13969c723))
* add monaco light theme ([#121](https://github.com/pdanpdan/vue-repl/issues/121)) ([ead9667](https://github.com/pdanpdan/vue-repl/commit/ead9667a85c1f217dab5955ebd9a11992b3fbe65))
* add search and replace ([#67](https://github.com/pdanpdan/vue-repl/issues/67)) ([4ca3d94](https://github.com/pdanpdan/vue-repl/commit/4ca3d94c98ed2029ccd61197780d45f348b2fcde))
* add template for new file ([9a0be1d](https://github.com/pdanpdan/vue-repl/commit/9a0be1df8c06ffdeab2985f9e9cd5f2cde1437fe))
* add tsconfig file ([#114](https://github.com/pdanpdan/vue-repl/issues/114)) ([29f6af5](https://github.com/pdanpdan/vue-repl/commit/29f6af5037826a6d37f77ba4cae748e7297152e3))
* allow starting on a specific view ([#15](https://github.com/pdanpdan/vue-repl/issues/15)) ([7e63511](https://github.com/pdanpdan/vue-repl/commit/7e635110bb5e11e8103b66c5d347cf959be8bd55))
* complete provideDefinition ([2035fc4](https://github.com/pdanpdan/vue-repl/commit/2035fc49977e5c2f5e8c57fe80c0bb53bb85df70))
* completed provideCompletionItems ([81ef510](https://github.com/pdanpdan/vue-repl/commit/81ef51028f9188fcf598e78e45836f09b9f191ae))
* completed provideHover ([3922239](https://github.com/pdanpdan/vue-repl/commit/39222398316adfda107f2b00d2cc27523f6cef52))
* completed provideSignatureHelp ([c599f2b](https://github.com/pdanpdan/vue-repl/commit/c599f2bdf136d0d02e0c2f50198d8f71f0e858f2))
* completed setModelMarkers ([86079ad](https://github.com/pdanpdan/vue-repl/commit/86079ad2030559052cef8b32e0d4a301a62b5f65))
* download TS dynamically ([#125](https://github.com/pdanpdan/vue-repl/issues/125)) ([97f698f](https://github.com/pdanpdan/vue-repl/commit/97f698f1f88690ab371e156ac2113955fdaa5fa8))
* **editor:** add Emmet for both editors ([02c0079](https://github.com/pdanpdan/vue-repl/commit/02c0079753bf48cb34973723cb8216025fa7860e))
* **editor:** implement autosave config ([794e4ce](https://github.com/pdanpdan/vue-repl/commit/794e4ce43859ce53aad24d08e5ce234705a68b7a))
* export compileFile ([#13](https://github.com/pdanpdan/vue-repl/issues/13)) ([60db549](https://github.com/pdanpdan/vue-repl/commit/60db54905699e005d3117a693410c0cd50f154fe))
* export Preview component ([#39](https://github.com/pdanpdan/vue-repl/issues/39)) ([0b93cd6](https://github.com/pdanpdan/vue-repl/commit/0b93cd66f5dc0beb2e44f271efa3868a155bff21))
* expose dependency version ([aecfd8a](https://github.com/pdanpdan/vue-repl/commit/aecfd8a92e6e7814dd6dbd5d5e94f71ef9fe5b1a))
* expose TS localized languages ([a52dd14](https://github.com/pdanpdan/vue-repl/commit/a52dd1468a6d6fb8ce4927a0a6771529f6a0f1ab))
* file-selector add horizontal scroll ([#10](https://github.com/pdanpdan/vue-repl/issues/10)) ([d0c961e](https://github.com/pdanpdan/vue-repl/commit/d0c961e7b20939f0e028fd0cb89ce75123f32aa7))
* **FileSelector:**  add an increment counter for new files ([#36](https://github.com/pdanpdan/vue-repl/issues/36)) ([63b8f22](https://github.com/pdanpdan/vue-repl/commit/63b8f22a991984ce1ce6c56d14ae4f35f8b4a436))
* **FileSelector:** edit file name in place and auto resize input on typing ([4c27b9d](https://github.com/pdanpdan/vue-repl/commit/4c27b9d25e4b6a71a13683a7f9b1c4ea69a9062f))
* gzip serialized state ([#43](https://github.com/pdanpdan/vue-repl/issues/43)) ([b12eb88](https://github.com/pdanpdan/vue-repl/commit/b12eb885deb080246d372495f443fe543de1eb6d))
* implemented provideCodeActions, resolveCodeAction ([1d37f55](https://github.com/pdanpdan/vue-repl/commit/1d37f55eacb4124171813d1db777496aa1bddeb3))
* implemented provideCodeLenses, resolveCodeLens ([bddb65b](https://github.com/pdanpdan/vue-repl/commit/bddb65b19053f069de3a3366666e3db1fd6bd6b1))
* implemented provideDeclaration ([8e437f0](https://github.com/pdanpdan/vue-repl/commit/8e437f0e8796ba3b8d7a19478fc1b9bcde6f2e43))
* implemented provideDocumentColors, provideColorPresentations ([ddde114](https://github.com/pdanpdan/vue-repl/commit/ddde1140945ac819765d93c7e33b07046fca55a6))
* implemented provideDocumentFormattingEdits ([73f046d](https://github.com/pdanpdan/vue-repl/commit/73f046d80cd17c9dea7051f6d488e3b757366ad9))
* implemented provideDocumentHighlights ([f782496](https://github.com/pdanpdan/vue-repl/commit/f7824960cb34f4ee2b58ad37a2af1a9364367b7a))
* implemented provideDocumentRangeFormattingEdits ([0e64a81](https://github.com/pdanpdan/vue-repl/commit/0e64a81a57e2e973d95bcf3bba03c43f48abc508))
* implemented provideDocumentSymbols ([1cda6c6](https://github.com/pdanpdan/vue-repl/commit/1cda6c638223c3d26f1b07deb24c6ba7b699014b))
* implemented provideFoldingRanges ([dd083d3](https://github.com/pdanpdan/vue-repl/commit/dd083d3b246b5db8e7a158585e0fc912c9dd03ce))
* implemented provideImplementation ([49d8d7e](https://github.com/pdanpdan/vue-repl/commit/49d8d7e52b34e94956a1e93bd7c98452d96831dd))
* implemented provideInlayHints ([61d18c9](https://github.com/pdanpdan/vue-repl/commit/61d18c97d9ea309a48ff50188661bcbfe97312a4))
* implemented provideLinkedEditingRanges ([1046ac8](https://github.com/pdanpdan/vue-repl/commit/1046ac8a29045b7a326002cb3fec9387675d9b33))
* implemented provideLinks ([3bc4063](https://github.com/pdanpdan/vue-repl/commit/3bc406352ac7ce697e7d6c4b83f7ff737adede08))
* implemented provideOnTypeFormattingEdits ([f50e1c9](https://github.com/pdanpdan/vue-repl/commit/f50e1c9c1ef7ed0ea02d51cdaaa5802f69911c7f))
* implemented provideReferences ([6b05d17](https://github.com/pdanpdan/vue-repl/commit/6b05d1726d3e06c36008b847a55978e1e7b99843))
* implemented provideRenameEdits ([5ca6318](https://github.com/pdanpdan/vue-repl/commit/5ca63181a2beebcc180282cd70f6732e572fd51d))
* implemented provideSelectionRanges ([2037d73](https://github.com/pdanpdan/vue-repl/commit/2037d73ded9944b10a4379d369aeec06a304df97))
* implemented provideTypeDefinition ([b80bb0d](https://github.com/pdanpdan/vue-repl/commit/b80bb0da90481cbebb214abf4a333daa7c4a42e9))
* implemented resolveCompletionItem ([3ef6ffd](https://github.com/pdanpdan/vue-repl/commit/3ef6ffdf58a66f74a8903b7479b43195b13aeb69))
* local JSON files ([#82](https://github.com/pdanpdan/vue-repl/issues/82)) ([db076eb](https://github.com/pdanpdan/vue-repl/commit/db076eb2b07e104ef460d7e2bd99769b5653e1a5))
* memorize show error state ([#117](https://github.com/pdanpdan/vue-repl/issues/117)) ([ab4b7cd](https://github.com/pdanpdan/vue-repl/commit/ab4b7cd4d2c99b2750e29feaa0b3487f4bb8ed85))
* **Message:** move it in front of button/toggles ([18a9f77](https://github.com/pdanpdan/vue-repl/commit/18a9f7769ecbfc59965e6e5fe493102504f54b1e))
* **monaco:** support to keep selection and cursor position ([#99](https://github.com/pdanpdan/vue-repl/issues/99)) ([db8c1bd](https://github.com/pdanpdan/vue-repl/commit/db8c1bdd13ac44c15336795387aa8e7a449dfd74))
* pass vue dts module version from store ([2a0dfc0](https://github.com/pdanpdan/vue-repl/commit/2a0dfc011a547d61523e5f64d882e5ed940bbb30))
* **preview:** call customCode (importCode/useCode) on both server and client on SSR ([6a30326](https://github.com/pdanpdan/vue-repl/commit/6a30326e93b3a0f4354742b9ad516df7d5c78a1c))
* provide fs option to support 3.3 external type resolving ([f0e826a](https://github.com/pdanpdan/vue-repl/commit/f0e826a1ff9eae7c008f2b92b4af35a518dd0c7f))
* respect browser language ([f9fedcd](https://github.com/pdanpdan/vue-repl/commit/f9fedcd1ca56a6965c9617a16d2fba834f8a44a1)), closes [#123](https://github.com/pdanpdan/vue-repl/issues/123)
* support auto close tag / auto .value ([f765d54](https://github.com/pdanpdan/vue-repl/commit/f765d54a69ef6aca5586873d19cf3f666adeb0c5))
* support custom display placeholder content ([#160](https://github.com/pdanpdan/vue-repl/issues/160)) ([9ca27a1](https://github.com/pdanpdan/vue-repl/commit/9ca27a12cf92b6ac6b7132a5c2ae667a13af4faa))
* support custom element styles ([#173](https://github.com/pdanpdan/vue-repl/issues/173)) ([812730d](https://github.com/pdanpdan/vue-repl/commit/812730db62b6f1865cee90b67f9f593412a0dce6))
* support custom file go to difinition ([#102](https://github.com/pdanpdan/vue-repl/issues/102)) ([519b0cc](https://github.com/pdanpdan/vue-repl/commit/519b0cc079dccdb08ed00f1b5d2fb0c965fbab03))
* support for sandbox page customization ([#42](https://github.com/pdanpdan/vue-repl/issues/42)) ([a22b969](https://github.com/pdanpdan/vue-repl/commit/a22b96968894dcaf4fa096edf8a1dd7d7f903e5e))
* support omitting ts/js extensions ([130a137](https://github.com/pdanpdan/vue-repl/commit/130a137dd9640ea912e68d27e390dd03664e2699))
* support passing in compiler-sfc options ([f6c7049](https://github.com/pdanpdan/vue-repl/commit/f6c7049f9bc4a5e1dd3e1c1948ba2ecb43fad3c3))
* support ssr + hydration ([098aa89](https://github.com/pdanpdan/vue-repl/commit/098aa8992ad860c8529fb285552c6c26e7518e9e))
* support toggling between dev/prod for Vue runtime ([8d3a2e6](https://github.com/pdanpdan/vue-repl/commit/8d3a2e62358104663af48531467ac8eda4bafffa))
* support ts in template expressions ([a1e9881](https://github.com/pdanpdan/vue-repl/commit/a1e98814699c020a2d82c8c5aad664e99bd6ef52))
* **toggles:** align 'show error', output, and iOS kbd on bottom and make them not overlap ([c95ae1a](https://github.com/pdanpdan/vue-repl/commit/c95ae1a0efdf15fa563fe43c01096c6b2a441244))
* **transform:** allow custom transformers for template and styles ([5869a91](https://github.com/pdanpdan/vue-repl/commit/5869a91d617edf106406a0bdb1150cf9398f59df))
* upgrade volar ([d925ba3](https://github.com/pdanpdan/vue-repl/commit/d925ba3c8a08966eab06eaf2720a7476415e7760))
* upgrade volar ([0783d93](https://github.com/pdanpdan/vue-repl/commit/0783d93fdd310e92ae3b2e22b0dc6ea78f93beaf))
* upgrade volar ([0aac8d1](https://github.com/pdanpdan/vue-repl/commit/0aac8d11632e0963e0ae3de4e02cf47a16deec60))
* use monaco ([e833cf1](https://github.com/pdanpdan/vue-repl/commit/e833cf14d447063654a02a83ba12fd23c8619c77))
* use ts version option for ts lib dts acquire ([376fe3b](https://github.com/pdanpdan/vue-repl/commit/376fe3ba2582fc128ccc4bbb2cd4b19666a5f1ec))
* vertical mode ([d59bb6c](https://github.com/pdanpdan/vue-repl/commit/d59bb6cd0eb0e03fa548595f5c64b990cecd133e))


### Performance Improvements

* cache `ts.ScriptSnapshot.fromString` ([6f34b78](https://github.com/pdanpdan/vue-repl/commit/6f34b78d7d637d8fc238ca68c8beb87884f110b0))
* preset failed node_modules paths to speed up dts acquisition ([e93f049](https://github.com/pdanpdan/vue-repl/commit/e93f0499719595aad61473b0b7819ece1b46818e))



