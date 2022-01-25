# Introdução

## Bash
### Usando GPG
```bash
docker run -it -v $PWD:/home/node/ node:14-alpine node /home/node/geradorSenha.js
```
### Usando SHA
```bash
date +%s | sha256sum | base64 | head -c 12 ; echo
```

### Usando URANDOM
```bash
 </dev/urandom tr -dc '12345!@#$%qwertQWERTasdfgASDFGzxcvbZXCVB' | head -c12; echo ""
```

### Usando OPENSSL RAND
```bash
openssl rand -base64 12
```

### Usando STRINGS
```bash
strings /dev/urandom | grep -o '[[:alnum:]]' | head -n 12 | tr -d '\n'; echo
```

### Usando DD
```bash
dd if=/dev/urandom bs=1 count=12 2>/dev/null | base64 -w 0 | rev | cut -b 2- | rev
```

## JavaScript
```bash
docker run -it -v $PWD:/home/node/ node:14-alpine node /home/node/geradorSenha.js
```