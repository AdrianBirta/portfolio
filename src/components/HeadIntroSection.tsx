import Icon from "@/components/icons/Icon";
import TitleSection from "@/components/TitleSection";
import { Building06, Cube04, Mail02 } from "@untitled-ui/icons-react";

export default function HeadIntroSection({
  intro,
  titleHighMd,
  titleHigh,
  title,
  highFirst,
  address,
}: {
  intro: string;
  titleHighMd?: string;
  titleHigh?: string;
  title?: string;
  highFirst?: boolean;
  address?: boolean;
}) {
  return (
    <section className="head-intro flex flex-col items-center pt-8">
      <span className="items-center text-gray-600 mb-2 lg:flex md:hidden sm:hidden hidden">
        <Icon name="docs" className="w-8 h-8 mr-2" />
        <p className="text-2xl">{intro}</p>
      </span>
      <TitleSection
        highFirst={highFirst}
        title={title}
        titleHigh={titleHigh}
        titleHighMd={titleHighMd}
        headTitle={true}
      />
      {address && (
        <div className="address flex xl:text-2xl text-sm">
          <div className="location flex items-center mr-2">
            <Building06 className="w-5 h-5 mr-2" />
            Oradea, Romania
          </div>
          ⋅
          <a
            href="mailto:adrian.birta.dev@gmail.com"
            className="text-highlight flex items-center ml-2"
            target="_blank"
          >
            <Mail02 className="w-6 h-6 mr-2" />
            <span>adrian.birta.dev@gmail.com</span>
          </a>
        </div>
      )}
    </section>
  )
}