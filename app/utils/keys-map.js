import { assign } from '@ember/polyfills';

let configKeys, configKeysMap, languageConfigKeys;

languageConfigKeys = {
  android: 'Android',
  bash: 'Shell',
  c: 'C',
  clojure: 'Clojure',
  compiler: 'Compiler',
  cpp: 'C++',
  crystal: 'Crystal',
  csharp: 'C#',
  d: 'D',
  dart_task: 'Task',
  dart: 'Dart',
  elixir: 'Elixir',
  elm: 'Elm',
  erlang: 'Erlang',
  ghc: 'GHC',
  go: 'Go',
  groovy: 'Groovy',
  hhvm: 'Hack (HHVM)',
  haskell: 'Haskell',
  haxe: 'Haxe',
  java: 'Java',
  jdk: 'JDK',
  julia: 'Julia',
  lein: 'Lein',
  mono: 'Mono',
  nix: 'Nix',
  node_js: 'Node.js',
  objective_c: 'Objective-C',
  osx_image: 'Xcode',
  otp_release: 'OTP Release',
  perl: 'Perl',
  perl6: 'Perl6',
  php: 'PHP',
  python: 'Python',
  r: 'R',
  ruby: 'Ruby',
  rust: 'Rust',
  rvm: 'Ruby',
  scala: 'Scala',
  sh: 'Shell',
  shell: 'Shell',
  smalltalk_config: 'Config',
  smalltalk: 'Smalltalk',
  xcode_scheme: 'Xcode scheme'
};

configKeys = {
  env: 'ENV',
  gemfile: 'Gemfile',
  xcode_sdk: 'Xcode SDK',
  xcode_scheme: 'Xcode Scheme',
  compiler: 'Compiler',
  os: 'OS'
};

configKeysMap = assign(configKeys, languageConfigKeys);

export default configKeysMap;

export { languageConfigKeys, configKeys };
