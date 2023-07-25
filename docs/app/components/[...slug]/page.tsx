import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allComponentPages } from 'contentlayer/generated';

import { Headline } from '@/ui';
import { Mdx } from '@/ui/mdx';

interface ComponentPageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: ComponentPageProps['params']) {
  const slug = params?.slug?.join('/');
  const page = allComponentPages.find(page => page.slugAsParams === slug);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
  };
}

export async function generateStaticParams(): Promise<
  ComponentPageProps['params'][]
> {
  return allComponentPages.map(page => ({
    slug: page.slugAsParams.split('/'),
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose py-6">
      <Headline level="1">{page.title}</Headline>
      <div className="text-text-primary-muted -mt-8">{page.caption}</div>
      <Mdx title={page.title} code={page.body.code} />
    </article>
  );
}
