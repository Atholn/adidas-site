import { Article } from "../models/history";
import HistoryArticle from "./history-article";
import "./history.scss";


const History : React.FC = () => {
  
  const firstArticleTitle : string  = "HISTORIA, SPORT, STYL I ODZIEŻ SPORTOWA W ADIDAS, OD 1949";
  const firstArticleContent : string = "Sport to dobra forma i kondycja. To pozytywne nastawienie. To coś, co nas łączy. Sport pomaga nam zmieniać świat na lepsze. Często są to inspirujące historie sportowców. Mobilizują nas do różnego rodzaju aktywności fizycznej. Odpowiednia odzież sportowa, a także najnowsze technologie pozwalają osiągać coraz lepsze rezultaty, bić kolejne rekordy życiowe. adidas ma wszystko to, co jest niezbędne do uprawiania różnych dyscyplin – od biegania przez koszykówkę i piłkę nożną po fitness. Ma wszystko, co niezbędne do bicia kolejnych rekordów. Także dla tych, którzy lubią w weekendy wybrać się za miasto. I dla tych, którzy ćwiczą jogę i przekazują jej tajniki innym. 3 paski sprawdzają się nawet na scenie muzycznej. Nie tylko podczas koncertów i festiwali. Nasza odzież sportowa ułatwia koncentrację przed pierwszym gwizdkiem. Podczas wyścigu i biegu. Na linii mety. Jesteśmy po to, by wspierać kreatorów. By byli lepszymi sportowcami. By lepiej im się żyło. I by mogli zmieniać świat na lepsze. adidas to nie tylko odzież sportowa czy treningowa. Współpracujemy i współtworzymy z najlepszymi w branży. Dzięki temu oferujemy naszym fanom odzież sportową i styl dopasowany do ich potrzeb treningowych, jednocześnie dbając o zrównoważony rozwój. Wspieramy kreatorów. Pomagamy im się rozwijać. Tworzymy zmianę. Przykładamy wagę do wpływu, jaki mamy na otaczający nas świat." 
  const secondArticleTitle : string = "TWÓJ SPORT, TWÓJ SKLEP SPORTOWY";
  const secondArticleContent : string = "adidas projektuje buty i ubrania sportowe dla sportowców uprawiających różne dyscypliny. Dla kreatorów, którym zależy na ciągłym rozwoju, którzy rzucają wyzwanie stereotypom, przesuwają granice sportu i swoją kreatywnością łamią skostniałe zasady. I nic ich nie może zatrzymać. Nasz sklep sportowy online ma dla wszystko to, co niezbędne dla drużyn i indywidualnych sportowców. Bo kreatorzy są dla nas najważniejsi. Projektujemy odzież sportową, która pozwala osiągać coraz lepsze wyniki. I wygrywać. Wszystkie aktywne kobiety znajdą dla siebie najwyższej jakości biustonosze sportowe i legginsy. Na każdy rodzaj aktywności. Tworzymy, ulepszamy, wprowadzamy innowacyjne rozwiązania. Testujemy nowe technologie: na boisku, na bieżni, na korcie, parkiecie i basenie, ale też na łonie natury. Zainspirowani naszymi archiwami, tworzymy ubrania i buty, które doskonale sprawdzają się w pozasportowych sytuacjach, jak NMD czy dresy Firebird. Klasyczne sportowe modele powracają w wielkim stylu, jak Stan Smith czy Superstar. Wszędzie są widoczne, bo są ponadczasowe. Nasze kolekcje zacierają granice między ekskluzywną modą a doskonałymi osiągami, jak choćby nasza kolekcja odzieży treningowej adidas by Stella McCartney – zaprojektowana tak, aby wspaniale prezentować się zarówno na siłowni, jak i poza nią. Albo niektóre produkty z serii adidas Originals, które można również nosić jako odzież sportową. Nasze życie wciąż się zmienia. Staje się coraz bardziej różnorodne. Projektując, adidas bierze to pod uwagę." 

  const historyArticles: Article[] = [
    new Article(firstArticleTitle, firstArticleContent),
    new Article(secondArticleTitle, secondArticleContent)
  ];


  return (
    <div className="container">
      <div className="row">
        {
          historyArticles.map((article) => (
            <HistoryArticle
              article={article}
            />
          ))
        }
      </div>
    </div>
  );
};

export default History;