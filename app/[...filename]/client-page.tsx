"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../tina/__generated__/types";
import Link from "next/link";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  const isHomePage = props.variables.relativePath === "home.mdx";

  if (isHomePage) {
    return (
      <div className="hero">
        <div data-tina-field={tinaField(data.page, "body")}>
          <TinaMarkdown content={content} />
        </div>
        <Link href="/posts" className="cta-button">
          Read the Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="page-content" data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown content={content} />
    </div>
  );
}
