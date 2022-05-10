import React from 'react'
import Image from 'react-bootstrap/Image'
import './board.css'

function Board(){
	return(
		<div className="chess-board">
			 <table>
				<tr>
					<td class="cell white">
						<p class="num green-mark">1</p>
					</td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
				</tr>
				<tr>
					<td class="cell green">
						<p class="num white-mark">2</p>
					</td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
				</tr>
				<tr>
					<td class="cell white">
						<p class="number-at-the-end green-mark">3</p><Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png" alt="White pawn" />
					</td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white">
						</td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
				</tr>
				<tr>
					<td class="cell green">
						<p class="num white-mark">4</p>
					</td>
					<td class="cell white"><Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png" alt="White pawn" /></td>
					<td class="cell green"></td>
					<td class="cell white"><Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png" alt="White king"/></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
				</tr>
				<tr>
					<td class="cell white">
						<p class="num green-mark">5</p>
					</td>
					<td class="cell green"><Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png" alt="Black pawn"/></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
				</tr>
				<tr>
					<td class="cell green">
						<p class="number-at-the-end white-mark">6</p>
                        <Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png" alt="Black pawn"/>
					</td>
					<td class="cell white"><Image className="picture" src="https://Images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png" alt="Black king" /></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
				</tr>
				<tr>
					<td class="cell white">
						<p class="number-at-the-end green-mark">7</p>
                        <Image className="picture" src="../images/wh.png" alt="Black king" />
					</td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
					<td class="cell white"></td>
					<td class="cell green"></td>
				</tr>
				<tr>
					<td class="cell green">
						<p class="num white-mark">8</p>
						<p class="alpha alpha-number white-mark">a</p>
					</td>
					<td class="cell white">
						<p class="alpha green-mark">b</p>
					</td>
					<td class="cell green">
						<p class="alpha white-mark">c</p>
					</td>
					<td class="cell white">
						<p class="alpha green-mark">d</p>
					</td>
					<td class="cell green">
						<p class="alpha white-mark">e</p>
					</td>
					<td class="cell white">
						<p class="alpha green-mark">f</p>
					</td>
					<td class="cell green">
						<p class="alpha white-mark">g</p>
					</td>
					<td class="cell white">
						<p class="alpha green-mark">h</p>
					</td>
				</tr>
			</table>
		</div>
	)
}

export default Board;
