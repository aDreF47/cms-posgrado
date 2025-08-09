```
cms-posgrado/
├── frontend/                  ← React app principal
│   ├── src/
│   │   ├── services/
│   │   │   ├── api.js        ← Interface unificada
│   │   │   ├── mockApi.js    ← Backend simulado (HOY)
│   │   │   └── realApi.js    ← Backend real (DESPUÉS)
│   │   ├── data/
│   │   │   └── mockData.js   ← Base de datos simulada
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
├── backend/                   ← Para después
│   ├── auth-service/         ← Tu código actual
│   ├── content-service/      ← Para después  
│   └── file-service/         ← Para después
│
└── README.md                 ← Documentación
```

✅ Presentas mañana con mock funcional
✅ Migras después cambiando solo una variable
✅ Frontend 100% reutilizable
✅ Interface API consistente
✅ Fácil testing y desarrollo
✅ Preparado para microservicios
✅ Zero rewrites en el futuro



### Estructura futura del backend:
```
backend/
├── auth-service/           ← Tu código actual
│   ├── package.json       ← Tu package.json actual
│   ├── server.js          ← Tu server.js actual  
│   ├── models/            ← Tus modelos actuales
│   ├── routes/            ← Tus rutas actuales
│   └── .env               ← Tus variables actuales
│
├── content-service/        ← NUEVO (para después)
│   ├── package.json       ← Nuevo proyecto Node.js
│   ├── server.js          ← Especializado en contenido
│   ├── models/
│   │   └── Content.js     ← Schema flexible de bloques
│   └── routes/
│       └── content.js     ← CRUD de contenido
│
└── file-service/           ← NUEVO (para después)
    ├── package.json       ← Nuevo proyecto Node.js
    ├── server.js          ← Especializado en archivos
    └── routes/
        └── upload.js      ← Upload de imágenes/docs
```