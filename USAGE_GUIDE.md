# 🛡️ Guia de Uso - Componentes Seguros Next.js

Este guia mostra como usar os componentes de segurança criados mantendo todas as qualidades do Next.js e Tailwind CSS.

## 📋 Índice

1. [Componentes Seguros](#componentes-seguros)
2. [Hooks de Segurança](#hooks-de-segurança)
3. [React Hook Form Integration](#react-hook-form-integration)
4. [Utilitários de Sanitização](#utilitários-de-sanitização)
5. [Exemplos Práticos](#exemplos-práticos)
6. [Integração com Next.js](#integração-com-nextjs)
7. [Integração com Tailwind CSS](#integração-com-tailwind-css)

## 🧩 Componentes Seguros

### SecureInput
Substitui `<input>` com sanitização automática:

```tsx
import { SecureInput } from '@/components/SecureInput';

function MyForm() {
  const [value, setValue] = useState('');
  
  return (
    <SecureInput
      value={value}
      onChange={(sanitized, original) => {
        setValue(sanitized); // Valor sanitizado
        console.log('Original:', original); // Valor original se necessário
      }}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Digite algo seguro..."
    />
  );
}
```

### SecureTextarea
Substitui `<textarea>` com sanitização automática:

```tsx
import { SecureTextarea } from '@/components/SecureTextarea';

function CommentForm() {
  return (
    <SecureTextarea
      onChange={(sanitized) => setComment(sanitized)}
      className="w-full h-32 p-4 border rounded-lg resize-none"
      placeholder="Escreva seu comentário..."
      maxLength={500}
    />
  );
}
```

### SecureLink
Substitui `<a>` e `Link` com sanitização de URLs:

```tsx
import { SecureLink } from '@/components/SecureLink';

function Navigation() {
  return (
    <nav className="flex space-x-4">
      {/* Link interno (usa Next.js Link automaticamente) */}
      <SecureLink 
        href="/about" 
        className="text-blue-600 hover:text-blue-800"
      >
        Sobre
      </SecureLink>
      
      {/* Link externo (usa <a> com target="_blank") */}
      <SecureLink 
        href="https://example.com" 
        external
        className="text-green-600 hover:text-green-800"
      >
        Site Externo
      </SecureLink>
    </nav>
  );
}
```

### SafeHtml
Renderiza HTML sanitizado com segurança:

```tsx
import { SafeHtml, useSanitizedHtml } from '@/components/SafeHtml';

function BlogPost({ content }: { content: string }) {
  return (
    <article className="prose max-w-none">
      <SafeHtml 
        html={content}
        tag="div"
        className="text-gray-800 leading-relaxed"
      />
    </article>
  );
}

// Ou usando o hook
function CustomComponent({ htmlContent }: { htmlContent: string }) {
  const sanitizedHtml = useSanitizedHtml(htmlContent);
  
  return (
    <div 
      className="content-area"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
```

## 🎣 React Hook Form Integration

### Componentes Seguros para React Hook Form

Criamos componentes específicos que funcionam perfeitamente com React Hook Form:

#### SecureFormInput
```tsx
import { SecureFormInput } from '@/components/SecureFormInput';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SecureFormInput
        {...register('name', { required: 'Nome é obrigatório' })}
        label="Nome"
        placeholder="Seu nome"
        error={errors.name?.message}
        className="mb-4"
      />
    </form>
  );
}
```

#### SecureFormTextarea
```tsx
<SecureFormTextarea
  {...register('message', { 
    required: 'Mensagem é obrigatória',
    minLength: { value: 10, message: 'Mínimo 10 caracteres' }
  })}
  label="Mensagem"
  rows={4}
  error={errors.message?.message}
  helperText="Descreva sua solicitação"
/>
```

#### SecureFormSelect
```tsx
const options = [
  { value: 'low', label: 'Baixa' },
  { value: 'medium', label: 'Média' },
  { value: 'high', label: 'Alta' }
];

<SecureFormSelect
  {...register('priority')}
  label="Prioridade"
  options={options}
  placeholder="Selecione a prioridade"
  error={errors.priority?.message}
/>
```

### Hook useSecureRHF

Hook avançado que estende o React Hook Form com sanitização automática:

```tsx
import { useSecureRHF, commonFieldConfigs } from '@/hooks/useSecureRHF';

interface FormData {
  name: string;
  email: string;
  website: string;
  bio: string;
}

function ContactForm() {
  const {
    register,
    handleSecureSubmit,
    formState: { errors },
    sanitizeField
  } = useSecureRHF<FormData>({
    fieldConfigs: {
      name: commonFieldConfigs.name,        // sanitize: 'text'
      email: commonFieldConfigs.email,      // sanitize: 'text'
      website: commonFieldConfigs.website,  // sanitize: 'url'
      bio: commonFieldConfigs.bio,          // sanitize: 'html'
    },
    defaultValues: {
      name: '',
      email: '',
      website: '',
      bio: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    // Dados já sanitizados automaticamente!
    console.log('Dados seguros:', data);
    
    // Enviar para API
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };

  return (
    <form onSubmit={handleSecureSubmit(onSubmit)}>
      <SecureFormInput
        {...register('name', { required: 'Nome obrigatório' })}
        label="Nome"
        error={errors.name?.message}
      />
      
      <SecureFormInput
        {...register('email', { 
          required: 'Email obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
          }
        })}
        type="email"
        label="Email"
        error={errors.email?.message}
      />
      
      <SecureFormInput
        {...register('website')}
        type="url"
        label="Website"
        error={errors.website?.message}
      />
      
      <SecureFormTextarea
        {...register('bio')}
        label="Bio"
        rows={4}
        error={errors.bio?.message}
      />
      
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Configurações de Campo Pré-definidas

```tsx
import { commonFieldConfigs } from '@/hooks/useSecureRHF';

// Configurações disponíveis:
const configs = {
  // Campos de texto simples
  name: { sanitize: 'text' },
  firstName: { sanitize: 'text' },
  lastName: { sanitize: 'text' },
  title: { sanitize: 'text' },
  email: { sanitize: 'text' },
  
  // Campos de URL
  website: { sanitize: 'url' },
  url: { sanitize: 'url' },
  link: { sanitize: 'url' },
  
  // Campos de conteúdo HTML
  description: { sanitize: 'html' },
  content: { sanitize: 'html' },
  bio: { sanitize: 'html' },
  message: { sanitize: 'html' },
  
  // Campos sem sanitização
  password: { sanitize: 'none' },
  confirmPassword: { sanitize: 'none' },
  age: { sanitize: 'none' },
  quantity: { sanitize: 'none' },
};
```

### Validação Avançada com Sanitização

```tsx
function AdvancedForm() {
  const {
    register,
    handleSecureSubmit,
    formState: { errors },
    watch,
    setValue,
    sanitizeField
  } = useSecureRHF({
    fieldConfigs: {
      username: { sanitize: 'text' },
      password: { sanitize: 'none' },
      confirmPassword: { sanitize: 'none' }
    }
  });

  const password = watch('password');

  // Sanitização manual quando necessário
  const handleUsernameBlur = (e) => {
    const sanitized = sanitizeField('username', e.target.value);
    setValue('username', sanitized);
  };

  return (
    <form onSubmit={handleSecureSubmit(onSubmit)}>
      <SecureFormInput
        {...register('username', { 
          required: 'Username obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message: 'Apenas letras, números e underscore'
          }
        })}
        label="Username"
        onBlur={handleUsernameBlur}
        error={errors.username?.message}
      />
      
      <SecureFormInput
        {...register('password', { 
          required: 'Senha obrigatória',
          minLength: { value: 8, message: 'Mínimo 8 caracteres' }
        })}
        type="password"
        label="Senha"
        error={errors.password?.message}
      />
      
      <SecureFormInput
        {...register('confirmPassword', { 
          required: 'Confirmação obrigatória',
          validate: (value) => value === password || 'Senhas não coincidem'
        })}
        type="password"
        label="Confirmar Senha"
        error={errors.confirmPassword?.message}
      />
      
      <button type="submit">Registrar</button>
    </form>
  );
}
```

## 🎣 Hooks de Segurança

### useSecureForm
Hook completo para formulários seguros:

```tsx
import { useSecureForm } from '@/hooks/useSecureForm';

function ContactForm() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
    reset
  } = useSecureForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validators: {
      name: (value) => value.length < 2 ? 'Nome muito curto' : null,
      email: (value) => !/\S+@\S+\.\S+/.test(value) ? 'Email inválido' : null,
      message: (value) => value.length < 10 ? 'Mensagem muito curta' : null
    }
  });

  const onSubmit = (sanitizedData: any) => {
    console.log('Dados seguros:', sanitizedData);
    // Enviar dados já sanitizados
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Seu nome"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      
      <div>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      
      <div>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg h-32"
          placeholder="Sua mensagem"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      
      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={!isValid}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Enviar
        </button>
        <button
          type="button"
          onClick={reset}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}
```

## 🧽 Utilitários de Sanitização

### Sanitização Manual
Para casos específicos onde você precisa sanitizar manualmente:

```tsx
import { sanitizeText, sanitizeHtml, sanitizeUrl } from '@/utils/sanitize';

function processUserData(userData: any) {
  return {
    name: sanitizeText(userData.name),
    bio: sanitizeHtml(userData.bio),
    website: sanitizeUrl(userData.website),
    // Outros campos...
  };
}

// Sanitização de arrays
function sanitizeArray(items: string[]) {
  return items.map(item => sanitizeText(item));
}

// Sanitização de objetos complexos
function sanitizeUserProfile(profile: UserProfile) {
  return {
    ...profile,
    displayName: sanitizeText(profile.displayName),
    description: sanitizeHtml(profile.description),
    socialLinks: profile.socialLinks.map(link => ({
      ...link,
      url: sanitizeUrl(link.url),
      title: sanitizeText(link.title)
    }))
  };
}
```

## 🚀 Integração com Next.js

### App Router
Os componentes funcionam perfeitamente com o App Router:

```tsx
// app/products/[id]/page.tsx
import { SafeHtml } from '@/components/SafeHtml';
import { SecureLink } from '@/components/SecureLink';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      
      {/* Descrição HTML segura */}
      <SafeHtml 
        html={product.description}
        className="prose max-w-none mb-6"
      />
      
      {/* Links seguros */}
      <div className="flex space-x-4">
        <SecureLink href="/products" className="text-blue-600">
          ← Voltar aos produtos
        </SecureLink>
        
        {product.externalLink && (
          <SecureLink 
            href={product.externalLink} 
            external
            className="text-green-600"
          >
            Site do fabricante
          </SecureLink>
        )}
      </div>
    </div>
  );
}
```

### Server Components
Os componentes seguros funcionam tanto em Server quanto Client Components:

```tsx
// Server Component
import { SafeHtml } from '@/components/SafeHtml';

export default async function BlogPost({ slug }: { slug: string }) {
  const post = await getBlogPost(slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <SafeHtml html={post.content} />
    </article>
  );
}

// Client Component
'use client';
import { SecureInput } from '@/components/SecureInput';
import { useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  
  return (
    <SecureInput
      value={query}
      onChange={(sanitized) => setQuery(sanitized)}
      placeholder="Buscar..."
    />
  );
}
```

### API Routes
Use a sanitização nas API routes:

```tsx
// app/api/comments/route.ts
import { sanitizeText, sanitizeHtml } from '@/utils/sanitize';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Sanitizar dados antes de salvar
  const sanitizedComment = {
    author: sanitizeText(body.author),
    content: sanitizeHtml(body.content),
    email: sanitizeText(body.email)
  };
  
  // Salvar no banco de dados
  const comment = await saveComment(sanitizedComment);
  
  return Response.json(comment);
}
```

## 🎨 Integração com Tailwind CSS

### Classes Condicionais
Use bibliotecas como `clsx` ou `cn` normalmente:

```tsx
import { cn } from '@/lib/utils';
import { SecureInput } from '@/components/SecureInput';

function FormField({ error, ...props }) {
  return (
    <SecureInput
      className={cn(
        "w-full px-4 py-2 border rounded-lg transition-colors",
        "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        error && "border-red-500 focus:ring-red-500",
        props.disabled && "bg-gray-100 cursor-not-allowed"
      )}
      {...props}
    />
  );
}
```

### Variantes de Componentes
Crie variantes usando Tailwind:

```tsx
import { SecureLink } from '@/components/SecureLink';

const buttonVariants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  danger: "bg-red-600 hover:bg-red-700 text-white"
};

function ActionButton({ variant = 'primary', href, children, ...props }) {
  return (
    <SecureLink
      href={href}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${buttonVariants[variant]}`}
      {...props}
    >
      {children}
    </SecureLink>
  );
}
```

### Responsive Design
Todos os componentes suportam classes responsivas do Tailwind:

```tsx
<SecureInput
  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base
             border rounded-lg md:rounded-xl
             focus:ring-2 focus:ring-blue-500
             dark:bg-gray-800 dark:border-gray-600 dark:text-white"
/>
```

## 🔧 Configuração Avançada

### Customização do DOMPurify
Você pode customizar as configurações de sanitização:

```tsx
// utils/sanitize.ts - Adicione configurações personalizadas
const customConfig = {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a'],
  ALLOWED_ATTR: ['href', 'title'],
  ALLOW_DATA_ATTR: false
};

export function sanitizeHtmlStrict(html: string): string {
  return DOMPurify.sanitize(html, customConfig);
}
```

### Middleware Personalizado
Estenda o middleware para suas necessidades:

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Headers de segurança personalizados
  response.headers.set('X-Custom-Security', 'enabled');
  
  // Log de segurança
  if (request.nextUrl.pathname.startsWith('/api/')) {
    console.log('API Request:', request.nextUrl.pathname);
  }
  
  return response;
}
```

## 📝 Exemplos Completos

Visite `/examples` na sua aplicação para ver todos os componentes em ação com exemplos interativos!

## 🛡️ Benefícios

✅ **Segurança Automática**: Proteção contra XSS sem esforço extra
✅ **Performance**: Sanitização otimizada e memoizada
✅ **Developer Experience**: API familiar, funciona como componentes nativos
✅ **Tailwind CSS**: Suporte completo a todas as classes e funcionalidades
✅ **Next.js**: Compatível com App Router, Server Components e API Routes
✅ **TypeScript**: Tipagem completa e intellisense
✅ **Flexibilidade**: Use quando precisar, ignore quando não precisar

## 🚨 Importante

- Os componentes sanitizam automaticamente, mas sempre valide dados no servidor
- Use HTTPS em produção
- Mantenha as dependências atualizadas
- Teste regularmente a segurança da aplicação