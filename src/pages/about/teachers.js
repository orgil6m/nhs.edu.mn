import React from "react";
import Header from "../../components/header";
import { useRouter } from "next/router";
import TeacherCard from "../../components/cards/teacherCard";
import Footer from "../../components/footer";
import { aboutLocales } from "../../i18n/locales";
import MetaHead from "../../components/metaHead";
const Teachers = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  const teachersData = [
    [
      {
        label: "Бага сургуулийн багш нар",
        head: {
          img: "https://nhs.edu.mn/assets/images/munkhtsetseg.png",
          firstname: "Мөнхцэцэг",
          lastname: "Д",
          role: "Бага ангийн багш",
          detail: "Тэргүүлэх зэрэгтэй ахлах багш",
          experience: [
            {
              label: "Бага ангийн багш",
              year: "2010",
              at: "МУБИС",
            },
            {
              label: "Боловсрол судлалын магистр",
              year: "2013",
              at: "Хүмүүнлэгийн Ухааны их сургууль",
            },
            {
              label: "Бага ангийн багш",
              year: "2010-2021",
              at: "Хантайшир-Эрдэм цогцолбор сургууль",
            },
            {
              label: "Бага ангийн багш",
              year: "2021-Одоо",
              at: "Ерөнхий боловсролын Нэст Эдүкэйшн сургууль",
            },
          ],
        },
        teachers: [
          {
            firstname: "Агиймаа",
            lastname: "А",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Баасанжав",
            lastname: "Б",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Баасанжаргал",
            lastname: "Б",
            role: "Кодчилол Stem хөтөлбөрийн багш",
          },
          {
            firstname: "Бямбажал",
            lastname: "Г",
            role: "Кодингийн багш",
          },
          {
            firstname: "Баярмаа",
            lastname: "С",
            role: "Хөгжмийн багш",
          },
          {
            firstname: "Болортуяа",
            lastname: "Г",
            role: "Дүрслэх урлагийн багш",
          },
          {
            firstname: "Даваадулам",
            lastname: "Б",
            role: "Биеийн тамирын багш",
          },
          {
            firstname: "Дуламсүрэн",
            lastname: "Ш",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Жавзандолгор",
            lastname: "Л",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Золзаяа",
            lastname: "Н",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Лхагвахорол",
            lastname: "Ц",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Минжбадрах",
            lastname: "М",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Мөнхцэцэг",
            lastname: "Д",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Наранзаяа",
            lastname: "Б",
            role: "EQ сэтгэл судлаач багш",
          },
          {
            firstname: "Пүрэвсүрэн",
            lastname: "Х",
            role: "Бүжгийн багш",
          },
          {
            firstname: "Солонго",
            lastname: "М",
            role: "EQ сэтгэл судлаач багш",
          },
          {
            firstname: "Туул",
            lastname: "А",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Ууганзаяа",
            lastname: "Б",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Үржиг",
            lastname: "Н",
            role: "Бага ангийн багш",
          },
          {
            firstname: "Эрвээхэй",
            lastname: "Б",
            role: "Хөгжмийн багш",
          },
        ],
      },
      {
        label: "Дунд сургуулийн багш нар",
        head: {
          img: "https://nhs.edu.mn/assets/images/bagsh3.jpg",
          firstname: "Гэрэлмаа",
          lastname: "Д",
          role: "Монгол хэл, бичгийн багш",
          detail: "Дунд сургуулийн сургалтын менежер",
          experience: [
            {
              label: "Хэл шинжлэлийн ухааны магистр",
              year: "2001",
              at: "МУБИС",
            },
            {
              label: "Гадаад харилцааны ажилтан",
              year: "2006-2007",
              at: "MIU Олон улсын дээд сургууль",
            },
            {
              label: "Гадаад хүмүүст Монгол хэл заах багш",
              year: "2009-2010",
              at: "MIU Олон улсын дээд сургууль",
            },
            {
              label: "Монгол хэлний багш",
              year: "2010-2016",
              at: "Монгол-Туркийн хамтарсан сургууль ",
            },
            {
              label: "Сургалтын менежер",
              year: "2016-2019",
              at: "MIU дунд сургууль",
            },
            {
              label: "Монгол хэл, бичгийн багш",
              year: "2019-Одоо",
              at: 'Ерөнхий боловсролын "Нэст Эдүкэйшн" сургууль',
            },
          ],
        },
        teachers: [
          {
            firstname: "Ариунаа",
            lastname: "Г",
            role: "Түүхийн багш",
          },
          {
            firstname: "Бат-Эрдэнэ",
            lastname: "Н",
            role: "Газар зүйн багш",
          },
          {
            firstname: "Баярцэцэг",
            lastname: "Г",
            role: "Монгол хэл, уран зохиолын багш",
          },
          {
            firstname: "Дэмбэрэлсүрэн",
            lastname: "А",
            role: "Монгол хэл, уран зохиолын багш",
          },
          {
            firstname: "Мөнхнасан",
            lastname: "Д",
            role: "Биологийн багш",
          },
          {
            firstname: "Оюунболор",
            lastname: "Н",
            role: "Математикийн багш",
          },
          {
            firstname: "Эрдэнэцэцэг",
            lastname: "Г",
            role: "Биеийн тамир багш",
          },
          {
            firstname: "Сайнжаргал",
            lastname: "Б",
            role: "Математикийн багш",
          },
          {
            firstname: "Сэлэнгэ",
            lastname: "Т",
            role: "Монгол хэл, уран зохиолын багш",
          },
          {
            firstname: "Үүрийнтуяа",
            lastname: "Э",
            role: "Сэтгэл зүйч",
          },
          {
            firstname: "Цэрэндолгор",
            lastname: "О",
            role: "Физикийн багш",
          },
          {
            firstname: "Шүрэнцэцэг",
            lastname: "А",
            role: "Химийн багш",
          },
        ],
      },
      {
        label: "Ахлах сургуулийн багш нар",
        head: {
          img: "https://nhs.edu.mn/assets/images/bagsh1.jpg",
          firstname: "Лхагвасүрэн",
          lastname: "П",
          role: "Химийн багш",
          detail: "Хөтөлбөрийн хорооны дарга",
          experience: [
            {
              label: "Инженер багш",
              year: "2005-2008",
              at: "МУИС-ХФ",
            },
            {
              label: "Багш-Менежер",
              year: "2008-2019",
              at: '"Хобби" бүрэн дунд сургууль',
            },
            {
              label: "Сургалтын менежер",
              year: "2019-2021",
              at: "Ерөнхий боловсролын Нэст Эдүкэйшн сургууль",
            },
            {
              label: "Ахлах сургуулийн захирал",
              year: "2022-2023",
              at: "Ерөнхий боловсролын Нэст Эдүкэйшн сургууль",
            },
          ],
        },
        teachers: [
          {
            firstname: "Адьяахүү",
            lastname: "Г",
            role: "Математикийн багш",
          },
          {
            firstname: "Батжаргал",
            lastname: "С",
            role: "Биеийн тамирийн багш",
          },
          {
            firstname: "Батцэцэг",
            lastname: "Ц",
            role: "Мэдээлэл технологийн багш",
          },
          {
            firstname: "Батбаяр",
            lastname: "О",
            role: "Математикийн багш",
          },
          {
            firstname: "Болдбаатар",
            lastname: "С",
            role: "Физикийн багш",
          },
          {
            firstname: "Гэрэлтуяа",
            lastname: "Д",
            role: "Сэтгэл зүйч",
          },
          {
            firstname: "Дөл",
            lastname: "Г",
            role: "Консул",
          },
          {
            firstname: "Мөнхбаатар",
            lastname: "Д",
            role: "Англи хэлний багш",
          },
          {
            firstname: "Мөнхтуул",
            lastname: "Ч",
            role: "Нийгмийн ухааны багш",
          },
          {
            firstname: "Нандин-Эрдэнэ",
            lastname: "О",
            role: "Монгол хэл, уран зохиолын багш",
          },
          {
            firstname: "Хулан",
            lastname: "У",
            role: "Англи хэлний багш",
          },
        ],
      },
      {
        label: "Мэдээлэл технологийн хэлтэс",
        head: {
          img: "https://nhs.edu.mn/assets/images/sod-od.png",
          firstname: "Сод-Од",
          lastname: "Б",
          role: "Технологи эрхэлсэн захирал",
          detail: "",
          experience: [
            {
              label: "Компьютерийн ухааны Магистр",
              year: "2014",
              at: "",
            },
            {
              label: "Компьютерийн ухааны Докторант",
              year: "2017",
              at: "",
            },
            {
              label: "Программ хангамжийн багш",
              year: "2012-2014",
              at: "ШУТИС-КТМС ",
            },
            {
              label: "Компьютерийн ухааны салбарын багш",
              year: "2014-2022",
              at: "ШУТИС-МХТС",
            },
            {
              label: "Үүсгэн байгуулагч",
              year: "",
              at: "LIT Academy",
            },
          ],
        },
        teachers: [
          {
            firstname: "Батмөнх",
            lastname: "Б",
            role: "Мэдээлэл технологийн багш",
          },
          {
            firstname: "Өсөхбаатар",
            lastname: "С",
            role: "Ахлах хөгжүүлэгч",
          },
          {
            firstname: "Өгөөмөр",
            lastname: "Д",
            role: "Ахлах хөгжүүлэгч",
          },
          {
            firstname: "Бархасболд",
            lastname: "Б",
            role: "Дизайнер",
          },
          {
            firstname: "Бат-Өлзий",
            lastname: "Р",
            role: "Дүрслэх урлагийн багш",
          },
          {
            firstname: "Баялагмаа",
            lastname: "Б",
            role: "Хөгжүүлэгч",
          },
          {
            firstname: "Алтансүх",
            lastname: "А",
            role: "Хөгжүүлэгч",
          },
          {
            firstname: "Анхбаяр",
            lastname: "Б",
            role: "Хөгжүүлэгч",
          },
          {
            firstname: "Мөнх-Оргил",
            lastname: "Э",
            role: "Хөгжүүлэгч",
          },
          {
            firstname: "Нямсүрэн",
            lastname: "Э",
            role: "Сүлжээний инженер",
          },
        ],
      },
    ],
    [
      {
        label: "Elementary school teachers",
        head: {
          img: "https://nhs.edu.mn/assets/images/munkhtsetseg.png",
          firstname: "Munkhtsetseg",
          lastname: "D",
          role: "Elementary School teacher",
          detail: "Senior Teacher with Honors",
          experience: [
            {
              label: "Elementary School Teacher",
              year: "2010",
              at: "Mongolian State University of Education",
            },
            {
              label: "Master of Education",
              year: "2013",
              at: "University of the Humanities",
            },
            {
              label: "Elementary School Teacher",
              year: "2010-2021",
              at: "Khantaishir-Erdem Complex School",
            },
            {
              label: "Elementary School Teacher",
              year: "2021-Present",
              at: "Nest Education IT School",
            },
          ],
        },
        teachers: [
          {
            firstname: "Agiimaa",
            lastname: "A",
            role: "Elementary School Teacher",
          },
          {
            firstname: "Baasanjav",
            lastname: "B",
            role: "Elementary School Teacher",
          },
          {
            firstname: "Baasanjargal",
            lastname: "B",
            role: "Instructor in the Coding Stem program",
          },
          {
            firstname: "Byambajal",
            lastname: "G",
            role: "Coding teacher",
          },
          {
            firstname: "Bayarmaa",
            lastname: "S",
            role: "Music teacher",
          },
          {
            firstname: "Bolortuya",
            lastname: "G",
            role: "Art teacher",
          },
          {
            firstname: "Davaadulam",
            lastname: "B",
            role: "Physical education teacher",
          },
          {
            firstname: "Dulamsuren",
            lastname: "Sh",
            role: "Elementary School teacher",
          },
          {
            firstname: "Javzandolgor",
            lastname: "L",
            role: "Elementary School teacher",
          },
          {
            firstname: "Золзаяа",
            lastname: "Н",
            role: "Elementary School teacher",
          },
          {
            firstname: "Lkhagvahorol",
            lastname: "Ts",
            role: "Elementary School teacher",
          },
          {
            firstname: "Minjbadrakh",
            lastname: "M",
            role: "Elementary School teacher",
          },
          {
            firstname: "Munkhtsetseg",
            lastname: "D",
            role: "Elementary School teacher",
          },
          {
            firstname: "Naranzaya",
            lastname: "B",
            role: "EQ Psychologist Teacher",
          },
          {
            firstname: "Purevsuren",
            lastname: "Kh",
            role: "Dance teacher",
          },
          {
            firstname: "Solongo",
            lastname: "M",
            role: "EQ Psychologist Teacher",
          },
          {
            firstname: "Tuul",
            lastname: "A",
            role: "Elementary School Teacher",
          },
          {
            firstname: "Uuganzaya",
            lastname: "B",
            role: "Elementary School Teacher",
          },
          {
            firstname: "Urjig",
            lastname: "N",
            role: "Elementary School Teacher",
          },
          {
            firstname: "Erveekhei",
            lastname: "B",
            role: "Music Teacher",
          },
        ],
      },
      {
        label: "Secondary school teachers",
        head: {
          img: "https://nhs.edu.mn/assets/images/bagsh3.jpg",
          firstname: "Gerelmaa",
          lastname: "D",
          role: "Teacher of Mongolian language and writing",
          detail: "Middle School Manager",
          experience: [
            {
              label: "MA in Linguistics",
              year: "2001",
              at: "Mongolian State University of Education",
            },
            {
              label: "Foreign Relations Officer",
              year: "2006-2007",
              at: "MIU International Institute",
            },
            {
              label: "Mongolian language teacher for foreigners",
              year: "2009-2010",
              at: "MIU International Institute",
            },
            {
              label: "Mongolian language teacher",
              year: "2010-2016",
              at: "Mongolian-Turkish joint school ",
            },
            {
              label: "Manager",
              year: "2016-2019",
              at: "MIU Middle School",
            },
            {
              label: "Teacher of Mongolian language and writing",
              year: "2019-Present",
              at: "Nest Education IT School",
            },
          ],
        },
        teachers: [
          {
            firstname: "Ariunaa",
            lastname: "G",
            role: "History Teacher",
          },
          {
            firstname: "Bat-Erdene",
            lastname: "N",
            role: "Geography teacher",
          },
          {
            firstname: "Bayartsetseg",
            lastname: "G",
            role: "Teacher of Mongolian language and literature",
          },
          {
            firstname: "Demberelsuren",
            lastname: "A",
            role: "Teacher of Mongolian language and literature",
          },
          {
            firstname: "Munkhnasan",
            lastname: "D",
            role: "Biology Teacher",
          },
          {
            firstname: "Oyunbolor",
            lastname: "N",
            role: "Math teacher",
          },
          {
            firstname: "Erdenetsetseg",
            lastname: "G",
            role: "Physical Education Teacher",
          },
          {
            firstname: "Sainjargal",
            lastname: "b",
            role: "Math Teacher",
          },
          {
            firstname: "Selenge",
            lastname: "T",
            role: "Teacher of Mongolian language and literature",
          },
          {
            firstname: "Uurintuya",
            lastname: "E",
            role: "Psychologist",
          },
          {
            firstname: "Tserendolgor",
            lastname: "O",
            role: "Physics teacher",
          },
          {
            firstname: "Shurentsetseg",
            lastname: "A",
            role: "Chemistry Teacher",
          },
        ],
      },
      {
        label: "High school teachers",
        head: {
          img: "https://nhs.edu.mn/assets/images/bagsh1.jpg",
          firstname: "Lkhagvasuren",
          lastname: "P",
          role: "Maths Teacher",
          detail: "Middle school principal",
          experience: [
            {
              label: "Engineer Teacher",
              year: "2005-2008",
              at: "NUM",
            },
            {
              label: "Teacher-Manager",
              year: "2008-2019",
              at: "Hobby School of Ulaanbaatar",
            },
            {
              label: "Manager",
              year: "2019-Present",
              at: "Nest Education IT School",
            },
          ],
        },
        teachers: [
          {
            firstname: "Adiyakhuu",
            lastname: "G",
            role: "Maths Teacher",
          },
          {
            firstname: "Batjargal",
            lastname: "S",
            role: "Physical Education Teacher",
          },
          {
            firstname: "Battsetseg",
            lastname: "Ts",
            role: "IT teacher",
          },
          {
            firstname: "Batbayar",
            lastname: "O",
            role: "Math Teacher",
          },
          {
            firstname: "Boldbaatar",
            lastname: "S",
            role: "Physics Teacher",
          },
          {
            firstname: "Gereltuya",
            lastname: "D",
            role: "Physicologist",
          },
          {
            firstname: "Dul",
            lastname: "G",
            role: "Counselor",
          },
          {
            firstname: "Munkhbaatar",
            lastname: "D",
            role: "English Teacher",
          },
          {
            firstname: "Munkhtuul",
            lastname: "Ch",
            role: "Social studies teacher",
          },
          {
            firstname: "Nandin-Erdene",
            lastname: "O",
            role: "Teacher of Mongolian language and literature",
          },
          {
            firstname: "Khulan",
            lastname: "U",
            role: "English Teacher",
          },
        ],
      },
      {
        label: "Information Technology Department",
        head: {
          img: "https://nhs.edu.mn/assets/images/sod-od.png",
          firstname: "Sod-Od",
          lastname: "B",
          role: "Chief Technology Officer",
          detail: "",
          experience: [
            {
              label: "Master of Computer Science",
              year: "2014",
              at: "MUST",
            },
            {
              label: "Ph.D. in Computer Science",
              year: "2017",
              at: "MUST",
            },
            {
              label: "Software Teacher",
              year: "2012-2014",
              at: "MUST-CTMS",
            },
            {
              label: "Computer science teacher",
              year: "2014-2022",
              at: "MUST-ICTS",
            },
            {
              label: "Chief Executive Officer",
              year: "",
              at: "LIT Academy",
            },
            {
              label: "Chief Technology Officer",
              year: "2022-Present",
              at: "Nest Education IT School",
            },
          ],
        },
        teachers: [
          {
            firstname: "Batmunkh",
            lastname: "B",
            role: "IOT Teacher",
          },
          {
            firstname: "Usukhbaatar",
            lastname: "S",
            role: "Senior Developer",
          },
          {
            firstname: "Uguumur",
            lastname: "D",
            role: "Senior developer",
          },
          {
            firstname: "Barkhasbold",
            lastname: "B",
            role: "Designer",
          },
          {
            firstname: "Tsend-Ayush",
            lastname: "B",
            role: "IT Teacher",
          },
          {
            firstname: "Bat-Ulzii",
            lastname: "R",
            role: "Digital Art Teacher",
          },
          {
            firstname: "Bayalagmaa",
            lastname: "B",
            role: "Developer",
          },
          {
            firstname: "Altansukh",
            lastname: "A",
            role: "Developer",
          },
          {
            firstname: "Ankhbayar",
            lastname: "B",
            role: "Developer",
          },
          {
            firstname: "Munkh-Orgil",
            lastname: "E",
            role: "Developer",
          },
          {
            firstname: "Nyamsuren",
            lastname: "E",
            role: "Network Engineer",
          },
        ],
      },
    ],
  ];

  const colors = ["yellow", "pink", "primary", "green"];
  return (
    <div className="relative w-screen overflow-hidden">
      <MetaHead title="Багш нарын баг | " />
      <div className="py-20 min-h-screen responsive-padding ">
        <Header />
        {teachersData[locale].map((row, index) => (
          <div key={index} className="">
            {/* TITLE */}
            <div className="w-full flex flex-col justify-center items-center text-3xl font-bold uppercase my-20">
              <span className="flex gap-3">
                <span>
                  {row.label.split(" ")[0] && row.label.split(" ")[0]}
                </span>
                <span>
                  {row.label.split(" ")[1] && row.label.split(" ")[1]}
                </span>
              </span>
              <span className={`text-${colors[index]} text-4xl flex gap-3`}>
                <span>
                  {row.label.split(" ")[2] && row.label.split(" ")[2]}
                </span>
                <span>
                  {row.label.split(" ")[3] && row.label.split(" ")[3]}
                </span>
              </span>
            </div>
            {/* GRID LIST OF TEACHERs */}
            <div className="grid md:grid-cols-2 gap-40  mb-40">
              <div className="grid md:grid-cols-2  gap-5 ">
                <div className="flex flex-col ">
                  <div
                    className="w-full aspect-square bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${row.head.img})` }}
                  />
                  <div className="mt-4">
                    <div className="w-full flex gap-1 text-2xl font-bold ">
                      <span>{row.head.lastname.slice(0, 1)}.</span>
                      <span>{row.head.firstname}</span>
                    </div>
                    <div className="flex flex-col font-light mt-2">
                      <span className="text-blue ">{row.head.detail}</span>
                      <span className="text-white/60">{row.head.role}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-6">
                    {row.head.experience.map((r, i) => (
                      <div
                        key={i}
                        className="font-light w-full flex flex-col  gap-1"
                      >
                        <span className=" text-white">{r.label}</span>
                        <span className="text-blue">{r.at}</span>
                        <span className="text-white/60">{r.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-3xl font-bold uppercase ">
                    {aboutLocales[locale].teachers.label}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {row.teachers.map((r, i) => (
                    <div key={i} className="flex gap-5 ml-8">
                      <div className="">
                        <span>{r.lastname.slice(0, 1)}.</span>
                        <span>{r.firstname}</span>
                      </div>
                      <span>|</span>
                      <span className="font-light text-white/60">{r.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <div
        className="absolute w-[60%]  rounded-full aspect-square blur-[20rem] bg-gradient-to-b from-yellow opacity-[40%] top-0 -right-1/4 
      -z-10"
      ></div>
      <div className="absolute w-[70%]  rounded-full aspect-video blur-[20rem] bg-gradient-to-b from-pink opacity-[30%] top-[30%] -left-1/4 -z-20"></div>
      <div className="absolute w-[80%] rounded-full aspect-video blur-[20rem] bg-gradient-to-b from-green opacity-[30%] top-[55%] -right-1/4 -z-30"></div>
      <div className="absolute w-[90%] rounded-full aspect-video blur-[20rem] bg-gradient-to-b from-blue opacity-[25%] top-[80%] -left-1/4 -z-40"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary  opacity-[20%]  md:-right-1/4 top-[90%] -right-1/2 -z-40"></div>
    </div>
  );
};

export default Teachers;
