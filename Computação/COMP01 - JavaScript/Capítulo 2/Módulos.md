O uso dos módulos é utilizado para acessar um código que está em outro arquivo. Isso é muito importante em projetos grandes ou com muitos arquivos pois organiza melhor os arquivos e códigos. Para isso é necessário exportar as funções e importar em outros arquivos. Veja como fazer isso:

```
//como exportar
const area = r => 3.14 * (r ** 2);
export{area};

//como importar
import {area} from './SeuArquivo';

```

Existe outro tipos de import/export da seguinte maneira:

```
//como exportar
export default const area = r => 3.14 * (r ** 2);

//como importar
import area from './SeuArquivo'
```