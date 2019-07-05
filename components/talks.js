import React from 'react';
import {Block} from './block';

class Talks extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are keynotes and invited talks I have given.
				</div>


				<Block
					image={this.props.app.getWebRoot() + "/images/eth2019programming.jpg"}
					link="https://www.youtube.com/watch?v=-crfoC6NtaE"
					header="Programming: What it is and how to teach it"
					content=
						<span>
							I have this invited talk in 2019 at ETH Zurich's CS department. I shared my lab's latest research on programming, including programming language learning, API learning, programming problem solving, and programming strategies. See <a href="slides/ETHZurich2019Programming.pdf">the slides</a> or the <a href="https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html">recording of my ETH talk</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/icse2018mip.png"}
					link="https://www.youtube.com/watch?v=lx7g-T10WxQ"
					header="Big Ideas Behind the Whyline"
					content=
						<span>
							I gave this talk in 2018 in recognition for my most influential paper award on my dissertation work on the Whyline. I reflected on the ideas, both technical, scientific, and otherwise that have shaped my discoveries. See <a href="slides/ICSE2018MIP.pdf">the slides</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/msricpc18.png"}
					link="https://youtu.be/Oh5NuyTMB4A"
					header="Mining the Mind, Minding the Mine: Grand Challenges in Comprehension and Mining"
					content=
						<span>
							I gave this invited joint keynote at the 2018 <a href="https://2018.msrconf.org/">International Conference on Mining Software Repositories</a>, and the <a href="https://conf.researchr.org/home/icpc-2018">International Conference on Program Comprehension</a>. I argued that the two areas need each other, that they both need theory, and that they both need to ask more relevant questions. See <a href="slides/MSRICPC2018Keynote.pdf">the slides</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/stanford18.png"}
					link="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be"
					header="Learning to Code: Why We Fail, How We Flourish"
					content=
						<span>
							In 2017 and early 2018 I gave a series of invited talks at <a href="https://medium.com/bits-and-behavior/a-visit-to-northwestern-university-cs-for-all-cs-x-and-interdisciplinary-learning-2d4b56fe709b">Northwestern</a>, the <a href="https://medium.com/bits-and-behavior/a-visit-to-the-university-of-michigans-interactive-and-social-computing-group-526b32a9970a">University of Michigan</a>, and <a href="https://medium.com/bits-and-behavior/a-visit-to-stanford-hci-8a392a8b774c">Stanford</a>, in which I summarized our latest research on the learning to code. See my <a href={this.props.app.getWebRoot() + "/slides/LearningToCode.pdf"}>slides</a> and <a href="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be">recorded talk</a> from Stanford.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/splash16.png"}
					link="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s"
					header="A Human View of Programming Languages"
					content=
						<span>
							I gave this invited keynote at <a href="https://2016.splashcon.org/">SPLASH 2016</a>, in which I built upon Seymour Papert's arguments about computing culture and the need for embracing multiple views of what programming is. See <a href={this.props.app.getWebRoot() + "/slides/SPLASH2016Keynote.pdf"}>my slides</a> and <a href="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s">a recording of my talk</a>.
						</span>
				/>

			</div>
		);
	}
}

export {Talks}