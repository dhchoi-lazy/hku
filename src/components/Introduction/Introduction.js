import { GridNormal, GridContainer, GridHighlight } from "../Layout";
import { useRef, useEffect } from "react";
import Bureaucracy from "./Bureaucracy";
import Gwageo from "./Gwageo";
import Yangban from "./yangban.svg";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import PsiConcept from "../Method/PsiConcept";
import ct from "../Method/ct.png";
import Related1 from "./temp01.png";
import Related2 from "./temp02.png";

export default function Introduction() {
  const deck1Ref = useRef(null);
  const deck2Ref = useRef(null);

  useEffect(() => {
    if (deck1Ref.current) {
      const deck1 = new Reveal(deck1Ref.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        progress: false,
        keyboardCondition: "focused",
      });

      deck1.initialize();
    }
    if (deck2Ref.current) {
      const deck2 = new Reveal(deck2Ref.current, {
        embedded: true,
        center: false,
        width: 1200,
        height: window.innerHeight,
        progress: false,
        keyboardCondition: "focused",
      });

      deck2.initialize();
    }
  }, []);
  return (
    <>
      <section id="introduction">
        <h1 className="text-4xl">1. Introduction</h1>

        <GridContainer>
          <GridNormal>
            <h2 className="text-2xl font-bold">Yangban</h2>
            <div style={{ display: "flex" }}>
              <img width="40%" src={Yangban} alt="Yangban" />
              <ul className="list-disc ml-5 space-y-2">
                <li className="list-disc">
                  <p className="text-lg">
                    Joseon's <i>de facto</i> noble class (but they are NOT
                    noble)
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    The term <b>Yangban</b> combines 양(兩) meaning 'two' and
                    반(班) signifying 'group', referring to both literary (문반;
                    文班) and military (무반; 武班) officials. However, this
                    definition is misleading as Yangban status was based on
                    social norms, characterized by its subjective and fluid
                    nature, not strictly legal classification
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    Attaining Yangban status required more than passing the
                    Gwageo; crucial was societal recognition within local
                    communities, which distinguished Yangban families from
                    non-Yangban ones. The status was fluid, allowing families to
                    transition between Yangban and commoner status.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    Despite debates over the precise formation period of the
                    Yangban class, especially before the early 16th century in
                    Joseon society, its distinct social entity is acknowledged.
                    Ascension to this class necessitated passing the{" "}
                    <b>Gwageo</b> and demonstrating proficiency in Confucian
                    philosophy, particularly in the Mungwa exams, as a testament
                    to merit and dedication to public service.
                  </p>
                </li>
              </ul>
            </div>
          </GridNormal>

          <h2 className="text-2xl font-bold">Gwageo and Bureaucracy</h2>
          <GridHighlight>
            <div style={{ height: "20vh" }}></div>
            <div className="reveal deck1" ref={deck1Ref}>
              <div className="slides">
                <section>
                  <Gwageo />
                </section>
                <section>
                  <Bureaucracy />
                </section>
              </div>
            </div>
          </GridHighlight>

          <GridHighlight>
            <div className="reveal deck2" ref={deck2Ref}>
              <div className="slides">
                <section>
                  <h2 className="text-4xl font-bold mb-20 mt-10">
                    Static vs. Dynamic: Perspectives on Yangban Society
                  </h2>
                  <div className="list-disc ml-5 space-y-2 text-left">
                    <p className="text-2xl">
                      <b>Static society</b> resists change and actively works to
                      maintain its existing social structures and traditions.
                    </p>
                    <p className="text-2xl">
                      <b>Dynamic society</b> embraces change, adapts readily,
                      and values innovation and progress.
                    </p>
                  </div>
                </section>
                <section>
                  <img src={Related1} alt="related1" />
                </section>
                <section>
                  <img src={Related2} alt="related1" />
                </section>
                <section className="h-full w-full top-0">
                  <h2 className="text-4xl font-bold">
                    Challenges to the Static Perspective
                  </h2>
                  <ul className="list-disc ml-5 space-y-2 text-left">
                    <li className="list-disc">
                      <p className="text-2xl">
                        Success defined too narrowly as holding a bureaucratic
                        position.
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="text-2xl">
                        Potential oversight of significant, yet not immediately
                        visible, data.
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="text-2xl">
                        Ignoring the concept of "dynamic equilibrium" with
                        underlying tensions.
                      </p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </GridHighlight>

          <GridNormal></GridNormal>

          <GridNormal>
            <div style={{ height: "20vh" }}></div>

            <h1 className="text-4xl">2. Methods</h1>
            <h2 className="text-2xl font-bold">Official grade table</h2>
            <table>
              <tbody>
                <tr>
                  <th>Korean</th>
                  <th>English</th>
                  <th>Numeric Value</th>
                </tr>
                <tr>
                  <td>정일품</td>
                  <td>1st Rank</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>종일품</td>
                  <td>Junior 1st Rank</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>정이품</td>
                  <td>2nd Rank</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>종이품</td>
                  <td>Junior 2nd Rank</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>정삼품</td>
                  <td>3rd Rank</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>종삼품</td>
                  <td>Junior 3rd Rank</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>정사품</td>
                  <td>4th Rank</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>종사품</td>
                  <td>Junior 4th Rank</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>정오품</td>
                  <td>5th Rank</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>종오품</td>
                  <td>Junior 5th Rank</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>정육품</td>
                  <td>6th Rank</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>종육품</td>
                  <td>Junior 6th Rank</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>정칠품</td>
                  <td>7th Rank</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>종칠품</td>
                  <td>Junior 7th Rank</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>정팔품</td>
                  <td>8th Rank</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>종팔품</td>
                  <td>Junior 8th Rank</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>정구품</td>
                  <td>9th Rank</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>종구품</td>
                  <td>Junior 9th Rank</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </GridNormal>
          <GridNormal>
            <PsiConcept />
          </GridNormal>
          <GridHighlight>
            <h1 className="text-2xl font-bold">
              Constructed Yangban Career Trajectories
            </h1>
            <img
              src={ct}
              width="100%"
              style={{ margin: "0 auto" }}
              alt="yangban trajectories"
            />
          </GridHighlight>
        </GridContainer>
      </section>
    </>
  );
}
