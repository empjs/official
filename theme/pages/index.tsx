import { NoSSR, usePageData } from "rspress/runtime";
import { Benchmark } from "../components/Benchmark";
import { BenchmarkCss } from "../components/BenchmarkCss"
import QQ from "../components/QQ";

import sm from './index.module.scss'
export function HomeLayout() {
  const { page } = usePageData();
  const { frontmatter } = page;
  return (
    <div className={sm.section_wrap}>
      {/* Landing Page */}
      
      {/* Benchmark Page */}
      <NoSSR>
        <Benchmark />
        <BenchmarkCss />
        <QQ />
      </NoSSR>
      {/* Footer */}
    </div>
  );
}
