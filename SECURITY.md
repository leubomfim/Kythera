# Guia de Segurança - Proteção contra XSS

Este documento descreve as medidas de segurança implementadas no projeto para prevenir ataques XSS (Cross-Site Scripting) e outras vulnerabilidades.

## 🛡️ Proteções Implementadas

### 1. Content Security Policy (CSP)
Configurado em `next.config.ts` com políticas restritivas:
- `default-src 'self'` - Permite recursos apenas do mesmo domínio
- `script-src` - Controla execução de scripts
- `style-src` - Controla carregamento de estilos
- `img-src` - Controla carregamento de imagens
- `frame-ancestors 'none'` - Previne clickjacking

### 2. Headers de Segurança
- **X-Frame-Options**: Previne clickjacking
- **X-Content-Type-Options**: Previne MIME type sniffing
- **Strict-Transport-Security**: Força uso de HTTPS
- **X-XSS-Protection**: Proteção adicional contra XSS
- **Referrer-Policy**: Controla informações de referrer

### 3. Sanitização de Conteúdo
- **DOMPurify**: Biblioteca para sanitização de HTML
- **Utilitários personalizados**: Funções para sanitizar texto, URLs e HTML

### 4. Componentes Seguros
- **SafeHtml**: Componente React para renderizar HTML sanitizado
- **useSecureForm**: Hook para formulários com sanitização automática

### 5. Middleware de Segurança
- Configuração automática de cookies seguros
- Headers de segurança adicionais
- Validações de requisições

## 📋 Como Usar

### Sanitizando HTML
```typescript
import { sanitizeHtml } from '@/utils/sanitize';

const safeHtml = sanitizeHtml(userInput);
```

### Componente SafeHtml
```tsx
import { SafeHtml } from '@/components/SafeHtml';

<SafeHtml html={userGeneratedContent} className="content" />
```

### Formulários Seguros
```tsx
import { useSecureForm, validators } from '@/hooks/useSecureForm';

const { setValue, getValue, handleSubmit } = useSecureForm({
  initialValues: { name: '', email: '' },
  validators: {
    name: validators.required,
    email: validators.email
  }
});
```

### Sanitizando URLs
```typescript
import { sanitizeUrl } from '@/utils/sanitize';

const safeUrl = sanitizeUrl(userProvidedUrl);
```

## ⚠️ Melhores Práticas

### 1. Nunca confie em dados do usuário
- Sempre sanitize inputs antes de processar
- Valide dados no frontend E backend
- Use componentes seguros para renderizar conteúdo

### 2. Evite dangerouslySetInnerHTML
- Use o componente `SafeHtml` em vez de `dangerouslySetInnerHTML`
- Se precisar usar, sempre sanitize o conteúdo primeiro

### 3. Validação de URLs
- Use `sanitizeUrl()` para validar links externos
- Permita apenas protocolos seguros (http, https, mailto, tel)

### 4. Cookies Seguros
- O middleware configura automaticamente cookies seguros
- Use flags: HttpOnly, Secure, SameSite=Strict

### 5. Formulários
- Use o hook `useSecureForm` para sanitização automática
- Implemente validação tanto no cliente quanto no servidor

## 🔍 Monitoramento

### Logs de Segurança
- CSP violations são reportadas no console do navegador
- Monitore tentativas de XSS através dos logs

### Testes de Segurança
Teste regularmente com payloads XSS comuns:
```html
<script>alert('XSS')</script>
<img src="x" onerror="alert('XSS')">
javascript:alert('XSS')
```

## 🚀 Próximos Passos

1. **Rate Limiting**: Implementar limitação de taxa para APIs
2. **CSRF Protection**: Adicionar tokens CSRF para formulários
3. **Input Validation**: Validação mais rigorosa no backend
4. **Security Headers**: Configurar headers adicionais no servidor
5. **Audit Logs**: Sistema de logs de auditoria

## 📚 Recursos Adicionais

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)

## 🆘 Reportar Vulnerabilidades

Se encontrar uma vulnerabilidade de segurança, por favor:
1. NÃO abra uma issue pública
2. Entre em contato diretamente com a equipe de desenvolvimento
3. Forneça detalhes sobre a vulnerabilidade encontrada